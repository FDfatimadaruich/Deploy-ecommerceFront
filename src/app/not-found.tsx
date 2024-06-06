/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-white text-4xl mb-8">
        <Link href="/">Vuelve a tu página!</Link>
      </div>
      <img
        src="/images/notfound.png"
        alt="not-found"
        className="w-64 md:w-96"
      />
    </div>
  );
}
