"use client";

import { useState } from "react";
import { Inputs } from "@/components/modules/partials/inputs";
import ModelViewer from "@/components/modules/_app/three";

const CreateModel = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File>();

  const fileInputHandler = (selectedFileUrl: string, selectedFile: File) => {
    setFileUrl(selectedFileUrl);
    setFile(selectedFile);
  };

  return (
    <>
      {(file && fileUrl && <ModelViewer fileUrl={fileUrl} file={file} />) || (
        <Inputs.FileDraggable
          onFileSelect={fileInputHandler}
          fileFormat={[".glb"]}
        />
      )}
    </>
  );
};

export default CreateModel;
