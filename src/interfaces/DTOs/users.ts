import { TRole } from "../global/roles";

export interface IUser {
  email: string;
  image: string;
  name: string;
}

export interface IUserGet extends IUser {
  role: TRole;
}

export interface IUserModified extends IUserGet {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}
