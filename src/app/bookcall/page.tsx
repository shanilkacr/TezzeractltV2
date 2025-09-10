// app/book-call/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import BgImage from "@/assets/images/BgTez.png"; // Only works if using webpack with image imports

function BookCall() {
  return (
    <div className="flex w-full h-full">
      {/* Left Side */}
      <div className="w-1/2 h-cover relative">
        <Image
          src={BgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-[150%] flex flex-col p-[100px] justify-center bg-white">
        <h2 className=" text-4xl md:text-5xl font-medium text-[#9AE1FE] mb-4 ">
          Take the first step to scale your company
        </h2>

        <iframe
          src="https://meet.brevo.com/shanilka-rajapaksha-1"
          className="w-full h-[1250px] border-0"
          title="Brevo Booking Form"
        ></iframe>
      </div>
    </div>
  );
}

export default BookCall;
