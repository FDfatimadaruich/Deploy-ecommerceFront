/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div className="text-gray-300 mx-10">
      <div className="flex items-center justify-center mb-4">
        <img src="\images\about.png" alt="image" className="opacity-50 " />
      </div>
      <div className="border-2 border-[#19B4FE] mx-40 my-10 hidden lg:block "></div>
      <div className="left-0 text-xl text-justify md:text-2xl m-4">
        <h1 className="text-[#19B4FE] leading-relaxed">SOBRE NOSOTROS</h1>
        <p className="leading-relaxed">
          Bienvenidos a FTech, donde la innovación y la tecnología se encuentran
          para ofrecerte lo mejor en dispositivos electrónicos. Desde nuestros
          inicios, FTech se ha comprometido a proporcionar productos de alta
          calidad que no solo satisfacen las necesidades de nuestros clientes,
          sino que también superan sus expectativas.
        </p>
        <h1 className="text-[#19B4FE] leading-relaxed">NUESTROS PRODUCTOS</h1>
        <p className="leading-relaxed">
          FTech se enorgullece de ofrecer una amplia gama de productos
          electrónicos que incluyen smartphones, monitores, tablets, accesorios,
          y mucho más. Cada uno de nuestros productos está diseñado con
          precisión y atención al detalle, utilizando los mejores materiales y
          tecnologías disponibles.
        </p>
      </div>
      <div className="border-2 border-[#19B4FE]  mx-40 my-10 hidden lg:block"></div>
    </div>
  );
}
