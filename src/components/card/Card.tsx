/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICard } from "./types";

const categoryNames: Record<number, string> = {
  1: "Celulares",
  2: "Monitores",
  3: "Tablets",
  4: "Accessorios",
  5: "Auriculares",
};

export const Card: React.FC<ICard> = ({ name, price, image, categoryId }) => {
  const categoryName = categoryNames[categoryId];
  return (
    <div className="relative flex flex-col items-center justify-between bg-black text-white p-4 border gap-2 m-4 max-w-[300px] h-[400px] rounded-xl transition duration-600 ease-in-out hover:border-[#19B4FE] hover:border-2">
      <img
        className="w-full h-48 object-contain "
        src={image}
        alt="imagen del producto"
      />
      <div className="absolute bottom-0 w-full p-4 flex flex-col items-center gap-2">
        <h2 className=" text-xl font-bold">{name}</h2>
        <p>Categoría: {categoryName}</p>
        <p className=" text-[#19B4FE]">USD$ {price}</p>
        <button className="border border-[#19B4FE] rounded-xl p-2 hover:font-bold hover:border-2">
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};
