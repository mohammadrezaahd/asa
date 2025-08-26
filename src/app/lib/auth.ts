import bcrypt from "bcryptjs";
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
      httpOptions: { timeout: 100000 },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        confirmPassword: { label: "Confirm Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        await connectToDb();

        const existingUser = await userModel.findOne({
          email: credentials.email,
        });

        // اگر کاربر پیدا شد → لاگین
        if (existingUser) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }

          return {
            id: existingUser._id.toString(),
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            image: existingUser.image,
            isOAuth: false,
          };
        }

        // اگر کاربر وجود نداشت → ثبت‌نام
        if (!credentials.confirmPassword) {
          throw new Error("Email not found");
        }

        if (credentials.password !== credentials.confirmPassword) {
          throw new Error("Passwords do not match");
        }

        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        const newUser = await userModel.create({
          name: credentials.email.split("@")[0],
          email: credentials.email,
          password: hashedPassword,
          role: constants.roles.user,
          image: "",
          isOAuth: false,
        });

        return {
          id: newUser._id.toString(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          image: newUser.image,
          isOAuth: false,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt", // استفاده از JWT برای ذخیره اطلاعات سشن
  },
  callbacks: {
    // زمانی که توکن JWT ساخته می‌شود
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // نقش کاربر را ذخیره می‌کنیم
        token.image = user.image || ""; // تصویر کاربر را ذخیره می‌کنیم
      }
      return token;
    },
    // زمانی که سشن ساخته می‌شود
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role; // نقش کاربر را به سشن می‌افزاییم
        session.user.image = token.image; // تصویر کاربر را به سشن می‌افزاییم
      }
      return session;
    },
    // زمانی که کاربر وارد می‌شود (لاگین با گوگل یا credentials)
    async signIn({ user, account }) {
      await connectToDb();
      const existingUser = await userModel.findOne({ email: user.email });
      const isOAuthUser = account?.provider !== "credentials";

      if (!existingUser) {
        // اگر کاربر با ایمیل وارد شده پیدا نشد، کاربر جدید را می‌سازیم
        await userModel.create({
          name: user.name,
          email: user.email,
          image: user.image || "",
          role: constants.roles.user,
          isOAuth: isOAuthUser,
          password: isOAuthUser
            ? undefined
            : crypto.getRandomValues(new Uint8Array(16)).toString(),
        });
      }
      return true; // اگر همه چیز درست بود، اجازه ورود را می‌دهیم
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
