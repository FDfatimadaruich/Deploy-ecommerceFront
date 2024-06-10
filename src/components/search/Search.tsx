"use client";
import { fetchProducts } from "@/helpers/fetchData";
import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      setProducts(response);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleClickOutside = (event: MouseEvent) => {
    //verifica si el ref del componente contiene el elemento en el que se hizo click
    if (!searchRef.current.contains(event.target as Node)) {
      setSearchText("");
    }
  };
  //gestiono el evento
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative " ref={searchRef}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={handleChange}
        className=" pl-12 pr-6 py-2 w-[130px] md:w-[300px] lg:w-[130px] xl:w-[300px] bg-transparent rounded-full  border border-[#19B4FE] "
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06zM10.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
          clipRule="evenodd"
        />
      </svg>
      {searchText && (
        <ul className="absolute left-0 w-80 bg-black z-30 p-4 text-xl">
          {filterProducts.map((product) => (
            <li key={product.id}>
              {" "}
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
