import Login from "@/components/userLogin/Login";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" min-h-screen  text-white bg-black flex justify-center ">
        <div className="m-auto ">
          <Login />
        </div>
      </div>
    </div>
  );
}
