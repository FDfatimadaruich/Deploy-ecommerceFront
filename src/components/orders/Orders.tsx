/* eslint-disable @next/next/no-img-element */

import React from "react";
import { IOrdersProps } from "./types";

const Orders: React.FC<IOrdersProps> = ({ ordersItems }) => {
  return (
    <div className="flex flex-col items-center ">
      {ordersItems.map((order) => (
        <div
          key={order.id}
          className="w-full max-w-4xl flex flex-col lg:flex-row border rounded-xl p-5 m-4 bg-black shadow-md"
        >
          <div className="lg:w-1/2 flex flex-col justify-center items-center ">
            <p>
              Fecha de la orden: {new Date(order.date).toLocaleDateString()}
            </p>
            <p>Estado de la orden: {order.status}</p>
          </div>
          {order.products.map((product) => (
            <div
              key={product.id}
              className="m-2 flex flex-col items-center justify-center"
            >
              <img
                alt={product.name}
                src={product.image}
                className="w-24 h-24 object-contain"
              />
              <h2 className="text-lg font-bold">{product.name}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
