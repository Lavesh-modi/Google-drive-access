"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Files from "@/components/Files";
// import Files from "..";

export default function Home() {
  const [category, setCategory] = useState("documents");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Files category={category} />
    </>
  );
}
