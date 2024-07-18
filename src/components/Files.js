"use client";

import Table from "./Table";
import useFetchFiles from "../hooks/useFetchFiles";

const Files = () => {
  const { files, loading } = useFetchFiles("/api/list");

  const columns = [
    { header: "File ID", accessor: "id" },
    { header: "File Name", accessor: "name" },
  ];

  return (
    <>
      <h1>Files</h1>
      <br />
      <div>
        {loading ? <p>Loading...</p> : <Table data={files} columns={columns} />}
      </div>
    </>
  );
};

export default Files;
