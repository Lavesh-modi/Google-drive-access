"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

function Home() {
  // const [category, setCategory] = useState("documents");
  return (
    <>
      <Navbar />
      <div className=" w-full  mt-4  overflow-y-hidden ">
        <Image
          src={"/background.jpg"}
          width={500}
          height={500}
          alt="background"
          // className="w-full  object-contain "
          style={{ height: "100vh", width: "100vw" }}
        />

        <h3 className=" text-9xl "> HFWVHFVWHFVWHFVW</h3>
      </div>
    </>
  );
}

export default Home;
