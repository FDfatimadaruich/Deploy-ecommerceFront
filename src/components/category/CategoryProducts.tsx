"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ICategoryProducts } from "./types";
import { Cards } from "../cards/Cards";

const categoryNames: Record<number, string> = {
  1: "Celulares",
  2: "Monitores",
  3: "Tablets",
  4: "Accessorios",
  5: "Auriculares",
  9: "Impresoras",
};

const CategoryProducts: React.FC<ICategoryProducts> = ({ products }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<number | null>(null);

  const handleSelectCategory = (categoryId: number) => {
    setSelectCategory(categoryId);

    setIsCategoryOpen(false);
  };

  const filterProductsByCategory = selectCategory
    ? products.filter((product) => product.categoryId === selectCategory)
    : products;

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div>
      <div className="flex items-center bg-black text-white h-20 ">
        <h2 className="text-lg font-bold">CATEGORÍAS:</h2>
        <button
          onClick={toggleCategory}
          className="text-white focus:outline-none lg:hidden"
        >
          {isCategoryOpen ? (
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>
      {isCategoryOpen && (
        <div className="lg:hidden left-0 w-full bg-black text-white p-4">
          <ul className="space-y-4">
            <li className="hover-underline">
              <button
                onClick={() => handleSelectCategory(null)}
                className="transition duration-700"
              >
                Todos
              </button>
            </li>
            {Object.entries(categoryNames).map(([id, name]) => (
              <li key={id} className="hover-underline">
                <button
                  onClick={() => handleSelectCategory(Number(id))}
                  className="transition duration-700"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="hidden lg:flex left-0 w-full bg-black text-white p-4">
        <ul className="flex space-x-8">
          <li className="hover-underline">
            <button
              onClick={() => handleSelectCategory(null)}
              className="transition duration-700"
            >
              Todos
            </button>
          </li>
          {Object.entries(categoryNames).map(([id, name]) => (
            <li key={id} className="hover-underline">
              <button
                onClick={() => handleSelectCategory(Number(id))}
                className="transition duration-700"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {filterProductsByCategory.length > 0 ? (
          <Cards products={filterProductsByCategory} />
        ) : (
          <div
            className="bg-cover bg-center no-repeat flex items-center justify-center mt-6"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000), url('/images/bgg.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "30rem",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="text-center text-white md:text-4xl font-bold ">
              NO SE ENCONTRARON PRODUCTOS PARA ESTA CATEGORÍA
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
