import { useEffect, useState } from "react";

const useFetchFiles = (url) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
        setLoading(false);
      });
  }, [url]);

  return { files, loading };
};

export default useFetchFiles;
