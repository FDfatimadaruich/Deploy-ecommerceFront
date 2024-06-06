"use client ";
import React, { useEffect, useState } from "react";
import Orders from "../orders/Orders";
import { IOrders } from "../context/type";
import { fetchOrders } from "@/helpers/fetchData";

export const OrdersDashboard: React.FC = () => {
  const [ordersGet, setOrdersget] = useState<IOrders[]>([]);

  useEffect(() => {
    const orders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrdersget(ordersData);
      } catch (error) {
        console.error("Error al obtener las órdenes:", error);
      }
    };
    orders();
  }, []);

  return (
    <div
      className="bg-cover bg-center no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000), url('/images/bgg.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "40rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      {ordersGet.length > 0 ? (
        <div>
          <Orders ordersItems={ordersGet} />
        </div>
      ) : (
        <div>
          <h1 className="text-white text-4xl font-bold">
            NO SE ENCUENTRAN ORDENES DE COMPRA
          </h1>
        </div>
      )}
    </div>
  );
};
