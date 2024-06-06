import { ProductDetail } from "@/components/productDetail/ProductDetail";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center items-center  my-20 ">
      <ProductDetail id={params.id} />
    </div>
  );
}
