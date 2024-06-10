/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Search from "../search/Search";
import { useAuth } from "../context/UseAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartProvider";

export const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { removeCart } = useCart();

  const router = useRouter();
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(null);
    toast.info("Usuario desconectado");
    router.push("/");
    removeCart();
  };

  return (
    <div className="w-full bg-black text-white container mx-auto flex items-center justify-between h-20 px-4">
      <div className="flex items-center">
        <img
          className="h-10 w-auto mr-auto ml-0 mt-1"
          src="/images/logo.png"
          alt="logo"
        />
        <div className="h-10 border-2 border-white mx-4"></div>
      </div>
      <div>
        <Search />
      </div>

      <div className="hidden lg:flex items-center space-x-8 ">
        <nav className="text-lg tracking-wider mx-0 relative lg:ml-[20px]">
          <ul className="flex space-x-8">
            <li className="hover-underline">
              <Link className="transition duration-700" href="/">
                INICIO
              </Link>
            </li>
            <li className="hover-underline">
              <Link className="transition duration-700" href="/about">
                SOBRE NOSOTROS
              </Link>
            </li>
            <li className="hover-underline">
              <Link className="transition duration-700" href="/products">
                PRODUCTOS
              </Link>
            </li>
            {isAuthenticated && (
              <li className="hover-underline">
                <button
                  className="transition duration-700 text-[#19B4FE] hover:font-bold"
                  onClick={handleLogout}
                >
                  CERRAR SESIÓN
                </button>
              </li>
            )}
          </ul>
        </nav>

        <Link className="ml-6" href="/carrito">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598"
                  clipRule="evenodd"
                />
                <path d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
              </g>
            </svg>
          </div>
        </Link>
        <div className="h-10 border-2 border-white mx-4"></div>
        <Link href="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52"
            />
          </svg>
        </Link>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {isMenu && (
        <div className="absolute top-16 left-0 w-full bg-black lg:hidden z-10">
          <nav className="text-lg tracking-wider">
            <ul className="flex flex-col items-center mt-2 space-y-4">
              <li className="hover-underline">
                <Link className="transition duration-300" href="/">
                  INICIO
                </Link>
              </li>
              <li className="hover-underline">
                <Link className="transition duration-300" href="/about">
                  SOBRE NOSOTROS
                </Link>
              </li>
              <li className="hover-underline">
                <Link className="transition duration-300" href="/products">
                  PRODUCTOS
                </Link>
              </li>
              {isAuthenticated && (
                <li className="hover-underline">
                  <button
                    className="transition duration-700 text-[#19B4FE] hover:font-bold"
                    onClick={handleLogout}
                  >
                    CERRAR SESIÓN
                  </button>
                </li>
              )}
            </ul>

            <div className="flex justify-center m-8 space-x-6">
              <Link href="/carrito">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598"
                      clipRule="evenodd"
                    />
                    <path d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
                  </g>
                </svg>
              </Link>
              <div className="h-10 border-2 border-white mx-4"></div>
              <Link href="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
