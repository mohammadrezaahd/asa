import environments from "@/helpers/configurations";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";
import { constants } from "@/constants";

const userModel = getTable("User");

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: environments.auth.client_id as string,
      clientSecret: environments.auth.client_secret as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        await connectToDb();

        let user = await userModel.findOne({ email: credentials.email });

        if (!user) {
          user = await userModel.create({
            name: credentials.email.split("@")[0],
            email: credentials.email,
            password: credentials.password,
            role: constants.roles.user,
          });
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role, // برگرداندن role به همراه کاربر
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // افزودن نقش به توکن در صورت ورود کاربر
      if (user) {
        token.role = user.role;
      } else {
        await connectToDb();
        const dbUser = await userModel.findOne({ email: token.email });
        if (dbUser) {
          token.role = dbUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // اضافه کردن role به session
      if (session.user) {
        session.user.role = token.role;
        // session.user.email = token.email; // اضافه کردن ایمیل به session
      }
      return session;
    },
    async signIn({ user }) {
      await connectToDb();
      const existingUser = await userModel.findOne({ email: user.email });

      if (!existingUser) {
        await userModel.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: constants.roles.user,
        });
      }

      return true; // اجازه ورود
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
