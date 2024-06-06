import React from "react";
import { ICard } from "../card/types";
import { fetchProducts } from "@/helpers/fetchData";
import CategoryProducts from "../category/CategoryProducts";

const Products = async () => {
  const products: ICard[] = await fetchProducts();

  return (
    <div className="w-3/4 ">
      <CategoryProducts products={products} />
    </div>
  );
};

export default Products;
