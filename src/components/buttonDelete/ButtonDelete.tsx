"use client";
import React from "react";
import { useCart } from "../context/CartProvider";
import { toast } from "sonner";

const ButtonDelete = ({ product }) => {
  const { isCart, setIsCart } = useCart();

  const handleRemove = () => {
    try {
      const updatedCart = isCart.filter((item) => item.id !== product); //
      setIsCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.info("Producto eliminado del carrito");
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage:", error);
    }
  };

  return (
    <div>
      <button
        className="border border-[#19B4FE] rounded-xl p-2 hover:font-bold hover:border-2"
        onClick={handleRemove}
      >
        ELIMINAR DEL CARRITO
      </button>
    </div>
  );
};

export default ButtonDelete;
