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
            image: "",
          });
        }

        return {
          // Return data
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add additional data in login proccess
      if (user) {
        token.role = user.role;
      } else {
        await connectToDb();
        const dbUser = await userModel.findOne({ email: token.email });
        if (dbUser) {
          token.role = dbUser.role;
          token.image = dbUser.image;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Add additional data to session
      if (session.user) {
        session.user.role = token.role;
        session.user.image = token.image;
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

      return true; //Login access
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
