"use client";
import React from "react";
import { useCart } from "../context/CartProvider";
import { useAuth } from "../context/UseAuth";
import Button from "../button/Button";
import { fetchCreateOrder } from "@/helpers/fetchData";
import { toast } from "sonner";

const ButtonBuy = ({ newOrder }) => {
  const { isCart, isOrders, setIsOrders, setIsCart } = useCart();
  const { isUserData } = useAuth();

  const handleDispatchOrder = async () => {
    if (!isUserData) return;

    try {
      const products = isCart.map((product) => product.id);
      const newOrder = await fetchCreateOrder(products);

      const updatedOrders = [...isOrders, newOrder];
      toast.success("Compra exitosa");

      setIsOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      setIsCart([]);
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      toast.error(
        "Hubo un problema al realizar la compra. Por favor, intenta de nuevo."
      );
    }
  };

  return (
    <Button className="m-5" onClick={handleDispatchOrder}>
      COMPRAR
    </Button>
  );
};

export default ButtonBuy;
