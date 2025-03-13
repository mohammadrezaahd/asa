import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth/next";
import connectToDb from "@/server/database/connection";
import getTable from "@/server/database/tables";

const userModel = getTable("User");

const handler = NextAuth({
  ...authOptions,
  callbacks: {
    async signIn({ user }) {
      await connectToDb();
      const existingUser = await userModel.findOne({ email: user.email });
      if (!existingUser) {
        await userModel.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "user",
        });
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
