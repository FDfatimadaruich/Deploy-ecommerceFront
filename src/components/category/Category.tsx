/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";

const categories = [
  { id: 1, name: "PORTATILES", image: "/categories/laptop2 (1).jpg" },
  { id: 2, name: "TABLETS", image: "/categories/tablets2.jpg" },
  { id: 3, name: "CELULARES", image: "/categories/phone.jpg" },
  { id: 4, name: "AURICULARES", image: "/categories/airpods.png" },
  { id: 5, name: "CAMARAS", image: "/categories/WATCH (1).jpg" },
  { id: 6, name: "ACCESORIOS", image: "/categories/accesorio.png" },
  { id: 7, name: "MONITORES", image: "/categories/monitors (1).jpg" },
  { id: 9, name: "IMPRESORAS", image: "/categories/printer1.jpg" },
];

export default function Category() {
  const [carrouselCategory, setCarroueselCategory] = useState(0);
  const [categoryPage, setCategoryPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCategoryPage(2);
      } else {
        setCategoryPage(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCategories = categories.length;

  const prevCategory = () => {
    setCarroueselCategory((index) =>
      index === 0 ? totalCategories - 1 : index - 1
    );
  };
  const nextCategory = () => {
    setCarroueselCategory((index) =>
      index === totalCategories - 1 ? 0 : index + 1
    );
  };

  const getVisibleCategories = () => {
    let start = carrouselCategory;
    let end = carrouselCategory + categoryPage;

    if (end > totalCategories) {
      return [
        ...categories.slice(start, totalCategories),
        ...categories.slice(0, end - totalCategories),
      ];
    } else {
      return categories.slice(start, end);
    }
  };
  return (
    <div className="relative">
      <div className="overflow-hidden w-full ">
        <div className="flex">
          {getVisibleCategories().map((category) => (
            <div
              key={category.id}
              className="w-full p-8 flex justify-center items-center "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-contain opacity-80"
              />
              <div className="absolute bottom-10  p-2 ">
                <h1 className="text-white text-center  lg:text-4xl sm:text-xl md:text-2xl tracking-wider font-extrabold">
                  {category.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button
          onClick={prevCategory}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-[4px] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
            />
          </svg>
        </Button>
        <Button
          onClick={nextCategory}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-[4px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
