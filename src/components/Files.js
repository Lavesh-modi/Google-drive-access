"use client";

import Table from "./Table";
import useFetchFiles from "../hooks/useFetchFiles";
import FileCard from "./Card";
import SkeletonLoader from "./Loading";

const Files = () => {
  const { files, loading } = useFetchFiles("/api/list");

  const columns = [
    { header: "File ID", accessor: "id" },
    { header: "File Name", accessor: "name" },
  ];

  return (
    <>
      <div className=" bg-gray-500 ">
        <h1 className="  text-3xl font-bold underline bg-orange-600">Files</h1>
        <br />
        {/* <div>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <Table data={files} columns={columns} />
        )}
      </div> */}
        <div>{loading ? <SkeletonLoader /> : <FileCard data={files} />}</div>
      </div>
    </>
  );
};

export default Files;
