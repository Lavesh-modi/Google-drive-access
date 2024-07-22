"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Files from "@/components/Files";

export default function Home() {
  const [category, setCategory] = useState("documents");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Files category={category} setCategory={setCategory} />
    </>
  );
}
