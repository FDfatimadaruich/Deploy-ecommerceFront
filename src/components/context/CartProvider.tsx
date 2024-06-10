"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

import { CartProviderProps, ICartContext, IOrders, IProduct } from "./type";

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCart, setIsCart] = useState<IProduct[]>([]);
  const [isOrders, setIsOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedOrders = localStorage.getItem("orders"); //carga

    if (savedCart) {
      const parsCart = JSON.parse(savedCart);
      setIsCart(parsCart);
    }
    if (savedOrders) {
      const parsOrders = JSON.parse(savedOrders);
      setIsOrders(parsOrders);
    }
  }, []);

  useEffect(() => {
    if (isCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(isCart));
    }
  }, [isCart]);

  const removeCart = (): void => {
    setIsCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ isCart, setIsCart, isOrders, setIsOrders, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartProvider must be used within a CartProvider");
  }
  return context;
};
