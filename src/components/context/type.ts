import { ReactNode } from "react";

export interface IAuthContext {
  isAuthenticated: string | null;
  setIsAuthenticated: (token: string | null) => void;
  isUserData: IUser | null;
  setIsUserData: (userData: IUser | null) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role?: Rol;
  credential?: ICredential;
  orders?: IOrders;
}

export interface ICredential {
  id: number;
  password: string;
}

export interface IOrders {
  id: number;
  status: Status;
  date: Date;
  user: IUserOrder;
  products: IProduct[];
}

export interface IUserOrder {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export enum Status {
  approved = "approved",
  disapproved = "disapproved.",
}

export enum Rol {
  user = "user",
  admin = "admin",
}
//cart
export interface ICartContext {
  isCart: IProduct[];
  setIsCart: (cart: IProduct[]) => void;
  isOrders: IOrders[];
  setIsOrders: (orders: IOrders[]) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}
