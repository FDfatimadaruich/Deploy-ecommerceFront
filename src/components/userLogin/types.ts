import { IUser } from "../context/type";

export interface ILogin {
  email: string;
  password: string;
  token: string;
  user?: IUser;
}
export interface ILoginError {
  email?: string;
  password?: string;
}
