"use client";
import React from "react";
import { useAuth } from "../context/UseAuth";
import Button from "../button/Button";
import Link from "next/link";
import { OrdersDashboard } from "../ordersDashboard/OrdersDashboard";

export const Dashboard: React.FC = () => {
  const { isAuthenticated, isUserData } = useAuth();

  return (
    <div className="text-white w-full">
      {isAuthenticated ? (
        <div>
          <div className="text-2xl">
            <h1>
              <strong>Bienvenido, </strong> {isUserData.name}
            </h1>
            <p>
              <strong>Correo electrónico: </strong>
              {isUserData.email}
            </p>
            <p>
              <strong>Dirección: </strong> {isUserData.address}
            </p>
            <p>
              <strong>Teléfono: </strong> {isUserData.phone}
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-[#19B4FE]">#Ordenes</h1>
          </div>
          <OrdersDashboard />
        </div>
      ) : (
        <div
          className="bg-cover bg-center no-repeat flex items-center justify-center mb-4 "
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000), url('/images/bg.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "40rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-white flex flex-col items-center ">
            <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider mb-10 font-bold">
              MI CUENTA
            </h1>
            <div className="flex flex-col items-center sm:flex-col md:flex-row   ">
              <Link href="/login">
                <Button className="m-5">INICIAR SESIÓN</Button>
              </Link>
              <Link href="/register">
                <Button className="m-5">REGISTRARSE</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
