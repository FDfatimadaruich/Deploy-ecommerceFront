import Button from "@/components/button/Button";
import Category from "@/components/category/Category";
import Carousel from "@/components/carousel/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="max-w-auto  bg-cover bg-center text-white no-repeat flex justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000), url('/images/bg.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "30rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" flex items-center justify-center h-full ">
          <div className="text-white font-bold text-center  ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider">
              PRODUCTO{" "}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider">
              DESTACADO{" "}
            </h1>
            <div className="my-2">
              <Link href="/product/1">
                <Button>DESCUBRIR AHORA</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mb-20">
        <Carousel />
      </div>
      <div className="mx-auto border-2 w-1/2 border-[#a7a6a6] "></div>
      <div className="">
        <Category />
      </div>
      <div className="mx-auto border-2 w-1/2 border-[#a7a6a6]   "></div>
    </div>
  );
}
