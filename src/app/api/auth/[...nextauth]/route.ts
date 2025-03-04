import connectToDb from "@/server/database/connection";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

const handler = async (req: Request, res: Response) => {
  await connectToDb();
  const nextAuth = (await import("next-auth")).default;
  return nextAuth(authOptions)(req, res);
};

export { handler as GET, handler as POST };