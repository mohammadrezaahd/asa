import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import environments from "@/helpers/configurations";
import connectToDb from "@/server/database/connection";
import User from "@/server/models/user";

export const authOptions: NextAuthOptions = {
  secret: environments.nextAuth.secret,
  providers: [
    GoogleProvider({
      clientId: environments.auth.client_id as string,
      clientSecret: environments.auth.client_secret as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectToDb();
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async session({ session, token }) {
      try {
        if (session.user && token.sub) {
          session.user.id = token.sub;
        }

        const existingUser = await User.findOne({ email: session.user?.email });
        if (existingUser) {
          session.user.role = existingUser.role;
        }

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
  debug: true,
};

console.log("environments.nextAuth.secret", environments.nextAuth.secret);
console.log("environments.auth.client_secret", environments.auth.client_secret);
console.log("environments.auth.client_id", environments.auth.client_id);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
