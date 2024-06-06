import React from "react";
import { Card } from "../card/Card";
import Link from "next/link";

import { ICardProps } from "./types";

export const Cards: React.FC<ICardProps> = ({ products }) => {
  return (
    <div className="text-white grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
      {products &&
        products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          );
        })}
    </div>
  );
};
