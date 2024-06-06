import { ICard } from "@/components/card/types";
import { IOrders, IUser } from "@/components/context/type";
import { ILogin } from "@/components/userLogin/types";
import { IRegister, IRegisterProps } from "@/components/userRegister/types";

import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async (): Promise<ICard[]> => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    const products: ICard[] = await response.json();

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchOrders = async (): Promise<IOrders[]> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${API_URL}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });
    const orders: IOrders[] = await response.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchCreateOrder = async (
  products: number[]
): Promise<IOrders> => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ products }),
    });
    const orders: IOrders = await response.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchRegister = async (
  userData: IRegisterProps
): Promise<IRegister> => {
  try {
    let bodyContent = JSON.stringify(userData);
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });

    const user: IRegisterProps = await response.json();
    console.log("Respuesta del servidor:", response);
    return user;
  } catch (error: any) {
    console.error("Error al registrar usuario fetch", error.message);
    throw error;
  }
};

export const fetchLogin = async (loginData: ILogin): Promise<ILogin> => {
  try {
    let bodyContent = JSON.stringify(loginData);
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });
    if (!response.ok) {
      throw new Error("error al loguear usuario");
    }
    const login = await response.json();
    console.log("Respuesta del servidor:", response);
    return login;
  } catch (error: any) {
    console.error("Error al intentar loguear usuario", error.message);
    throw error;
  }
};
