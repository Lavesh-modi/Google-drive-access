"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="background"
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-xl">Showcasing my work and projects</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
