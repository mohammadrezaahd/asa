"use client";

import { useState } from "react";
import { Modules } from "@/components/modules";
import FileInput from "@/components/modules/inputs/FileInput";

const MyHome = () => {
  const [fileUrl, setFileUrl] = useState<string>();

  const fileInputHandler = (selectedFile: string) => {
    setFileUrl(selectedFile);
  };

  return (
    <>
      {(fileUrl && <Modules.ModelViewer fileUrl={fileUrl} />) || (
        <FileInput onFileSelect={fileInputHandler} />
      )}
    </>
  );
};

export default MyHome;
