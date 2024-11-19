"use client";

import { useEffect, useState } from "react";
import { Modules } from "@/components/modules";

const ModelViewer = () => {
  const [fileUrl, setFileUrl] = useState<string>();

  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        const response = await fetch("/api/connectionCheck");
        if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData.error);
        } else {
          const data = await response.json();
          console.log(data.message);
        }
      } catch (err) {
        console.error("Error fetching database connection status", err);
      }
    };

    checkDatabaseConnection();
  }, []);

  const fileInputHandler = (selectedFile: string) => {
    setFileUrl(selectedFile);
  };

  return (
    <>
      {(fileUrl && <Modules.ModelViewer fileUrl={fileUrl} />) || (
        <Modules.FileInput onFileSelect={fileInputHandler} />
      )}
    </>
  );
};

export default ModelViewer;
