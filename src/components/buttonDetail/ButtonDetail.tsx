"use client";
import React from "react";
import { useCart } from "../context/CartProvider";
import Button from "../button/Button";
import { useAuth } from "../context/UseAuth";
import { toast } from "sonner";

const ButtonDetail = ({ product }) => {
  const { setIsCart, isCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = async () => {
    const productExists = isCart.some((item) => item.id === product.id);
    if (productExists) {
      toast.error("El producto ya se encuentra en el carrito");
      return;
    }

    const updatedCart = [...isCart, product];
    setIsCart(updatedCart);
    try {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Producto agregado al carrito");
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage:", error);
    }
  };
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Button onClick={handleAddToCart}>AGREGAR AL CARRITO</Button>
        </div>
      ) : (
        <div>
          <Button onClick={handleAddToCart} disabled={!isAuthenticated}>
            AGREGAR AL CARRITO
          </Button>
          <p className="text-white hover:font-bold">
            Debes iniciar sesión para agregar productos al carrito.
          </p>
        </div>
      )}
    </div>
  );
};

export default ButtonDetail;
