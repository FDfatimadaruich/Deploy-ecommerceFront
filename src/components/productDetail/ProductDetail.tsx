import { fetchProducts } from "@/helpers/fetchData";
import { CardDetail } from "../cardDetail/CardDetail";
import { ICard } from "../card/types";
import React from "react";
import { IProductProps } from "./types";

export const ProductDetail: React.FC<IProductProps> = async ({ id }) => {
  const products: ICard[] = await fetchProducts();
  const product: ICard = products.find((p) => p.id == Number(id));

  return (
    <div className="flex justify-center items-center my-20">
      <CardDetail
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        stock={product.stock}
        image={product.image}
        categoryId={product.categoryId}
      />
    </div>
  );
};
