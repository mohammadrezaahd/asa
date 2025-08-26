import { TRole } from "../global/roles";

export interface IUser {
  email: string;
  password?: string;
  isOAuth: boolean;
  image?: string;
  role: "USER" | "ADMIN";
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
}

export interface IUserGet extends IUser {
  role: TRole;
}

export interface IUserModified extends IUserGet {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}
