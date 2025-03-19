import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";
import { IUserModified } from "../DTOs/users";

declare module "next-auth" {
  interface Session {
    user: IUserModified & DefaultSession["user"];
  }

  interface User extends DefaultUser, IUserModified {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT, IUserModified {}
}
