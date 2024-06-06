/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICard } from "../card/types";
import Link from "next/link";
import ButtonDetail from "../buttonDetail/ButtonDetail";

const categoryNames: Record<number, string> = {
  1: "Celulares",
  2: "Monitores",
  3: "Tablets",
  4: "Accessorios",
  5: "Auriculares",
  6: "Auriculares",
  7: "Monitores",
  9: "Impresoras",
};

export const CardDetail: React.FC<ICard> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  const product = { id, name, description, price, stock, image, categoryId };
  const categoryName = categoryNames[categoryId];
  return (
    <div className="flex flex-col lg:flex-row items-center bg-black text-white p-8 border max-w-[90%] h-auto rounded-xl">
      <div className="lg:ml-20 md:ml-20 my-10 lg:w-1/3">
        <img
          className="h-80 object-contain transition-transform duration-300 transform hover:scale-125"
          src={image}
          alt="imagen del producto"
        />
      </div>
      <div className="border-2 border-white h-72 mx-40 hidden lg:block"></div>
      <div className="flex flex-col justify-between w-full lg:w-2/3 lg:ml-8">
        <div>
          <h2 className="text-[#19B4FE] text-4xl my-4 font-bold tracking-wider">
            {name}
          </h2>
          <p className="mb-4 text-xl">{description}</p>
        </div>
        <div className="flex flex-col space-y-2 mb-4 text-xl">
          <p>
            <span className="font-bold tracking-wider">Stock:</span> {stock}
          </p>
          <p>
            <span className="font-bold tracking-wider">Categoría:</span>{" "}
            {categoryName}
          </p>
          <p className="text-[#19B4FE]">
            <span className="font-bold tracking-wider">$</span> {price}
          </p>
        </div>
        <Link href="/carrito">
          <ButtonDetail product={product}></ButtonDetail>
        </Link>
      </div>
    </div>
  );
};
