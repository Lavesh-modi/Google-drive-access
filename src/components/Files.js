"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import useFetchFiles from "../hooks/useFetchFiles";
import FileCard from "./Card";
import SkeletonLoader from "./Loading";

const Files = () => {
  const [category, setCategory] = useState("documents");
  const { files, loading } = useFetchFiles("/api/list");

  const categorizedFiles = files ? files[category] : [];
  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div>
          <Navbar setCategory={setCategory} />
          <h1 className="text-3xl font-bold underline bg-black text-center m-5">
            Files
          </h1>
          <br />
          <div>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <FileCard data={categorizedFiles} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Files;
