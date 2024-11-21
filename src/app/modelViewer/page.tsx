"use client";

import { useState } from "react";
import { Modules } from "@/components/modules";

const ModelViewer = () => {
  const [fileUrl, setFileUrl] = useState<string>();

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