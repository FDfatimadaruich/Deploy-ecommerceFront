/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ICartProps } from "./types";
import { useCart } from "../context/CartProvider";
import ButtonBuy from "../buttonBuy/ButtonBuy";
import Link from "next/link";
import { useAuth } from "../context/UseAuth";
import Button from "../button/Button";
import ButtonDelete from "../buttonDelete/ButtonDelete";

export const Cart: React.FC<ICartProps> = ({ cartItems }) => {
  const { isCart } = useCart();
  const { isAuthenticated } = useAuth();

  const totalPrice = isCart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col items-center bg-black text-white w-full p-4 ">
      {isAuthenticated ? (
        <div>
          {isCart.length > 0 ? (
            <div>
              <div className="flex flex-col gap-6">
                {isCart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col xl:flex-row items-center border p-5 gap-4 rounded-xl"
                  >
                    <div className="flex items-center justify-center w-full h-64 sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]">
                      <img
                        className="object-contain h-full w-full"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="border border-white mx-8 h-1 lg:h-72 xl:block hidden"></div>
                    <div className="w-full text-2xl flex flex-col justify-center gap-3 sm:text-xl md:text-2xl">
                      <h3 className="text-3xl sm:text-4xl md:text-6xl my-3">
                        {item.name}
                      </h3>
                      <p className="text-sm sm:text-md md:text-lg">
                        {item.description}
                      </p>
                      <p className="text-[#19B4FE] text-lg sm:text-xl md:text-2xl">
                        ${item.price}
                      </p>
                    </div>
                    <div>
                      <ButtonDelete product={item.id}></ButtonDelete>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center lg:flex-row justify-center text-2xl sm:text-3xl mt-5 w-full">
                <h1>TOTAL: </h1>
                <h1 className="text-[#19B4FE]">${totalPrice.toFixed(2)}</h1>
              </div>
              <div className="flex flex-col items-center justify-center sm:flex-col md:flex-row gap-4 mt-6">
                <Link href="/profile">
                  <ButtonBuy newOrder={cartItems}></ButtonBuy>
                </Link>
                <Link href="/products" className="hover:font-bold">
                  SEGUIR COMPRANDO
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center ">
              <h1 className="text-lg sm:text-xl lg:text-4xl">
                AGREGA PRODUCTOS A TU CARRITO
              </h1>
              <p className="text-lg sm:text-xl lg:text-4xl">
                #Mira{" "}
                <span>
                  <Link href="/products" className="text-[#19B4FE]">
                    aquí
                  </Link>
                </span>{" "}
                todos los productos!
              </p>
              <img
                className="w-full object-contain"
                src="\images\carrito.png"
                alt="imagen del producto"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          <div
            className="bg-cover bg-center no-repeat flex items-center justify-center "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000), url('/images/bg2.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "40rem",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-white flex flex-col items-center  ">
              <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider mb-10 font-bold">
                MI CUENTA
              </h1>
              <p>Debes iniciar sesión para poder ver tu carrito</p>
              <div className="flex flex-col items-center sm:flex-col md:flex-row">
                <Link href="/login">
                  <Button className="m-5">INICIAR SESIÓN</Button>
                </Link>
                <Link href="/register">
                  <Button className="m-5">REGISTRARSE</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
