/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Button from "../button/Button";

const slides = [
  {
    imageRight: "/slides/slide1.png",
    imageLeft: "/slides/descarga (3).png",
    title: "iPhone 15 Pro",
    description:
      "El iPhone 15 Pro de Apple combina un diseño innovador con un rendimiento potente y características avanzadas.",
  },
  {
    imageRight: "/slides/descarga.png",
    imageLeft: "/slides/descarga (4).png",
    title: "Estilos",
    description:
      "Los estilos de Apple se distinguen por su elegancia, simplicidad y funcionalidad. Desde sus dispositivos hasta su software, cada elemento refleja un diseño cuidadosamente pensado que combina estética y rendimiento de manera armoniosa.",
  },
  {
    imageRight: "/slides/descarga (1).png",
    imageLeft: "/slides/descarga (2).png",
    title: "Cámara",
    description:
      "Descubre una experiencia de fotografía como ninguna otra con las cámaras innovadoras de Apple. Desde retratos impresionantes hasta paisajes inolvidables, la cámara de tu dispositivo Apple te permite capturar cada momento con una claridad y calidad excepcionales.",
  },
];

export default function Carousel() {
  const [carousel, setCarousel] = useState(0);

  const prev = () => {
    setCarousel((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const next = () => {
    setCarousel((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="relative w-full  mx-auto">
      <div className="overflow-hidden h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === carousel ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex ">
              <img
                src={slide.imageLeft}
                alt={slide.title}
                className="w-full  h-auto object-cover "
              />
              <img
                src={slide.imageRight}
                alt={slide.title}
                className="w-full  h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl lg:text-8xl md:text-4xl sm:text-4xl font-bold mb-10 tracking-wider ">
                {slide.title}
              </h1>
              <div>
                <p className="text-[#989999] text-center text-xl lg:w-80 md:w-auto sm:w-full tracking-wider ">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center -translate-y-1/3 md:-translate-y-1/4 lg:translate-y-[0%] ">
        <Button onClick={prev} className="bg-transparent border-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
            />
          </svg>
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center -translate-y-1/3 md:-translate-y-1/4 lg:translate-y-[0%]">
        <Button onClick={next} className="bg-transparent border-none  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
