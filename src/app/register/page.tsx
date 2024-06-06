import Register from "@/components/userRegister/Register";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <div className="  min-h-screen bg-black  text-white  flex justify-center  ">
          <div className="m-auto ">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
