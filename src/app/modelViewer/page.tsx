"use client";

import { useState } from "react";
import { TDModelsApi } from "@/components/api/TDModels";
import { Inputs } from "@/components/modules/partials/inputs";
import ModelViewer from "@/components/modules/_app/three";

const CreateModel = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState<string>("");

  const fileInputHandler = (selectedFileUrl: string, selectedFile: File) => {
    setFileUrl(selectedFileUrl);
    setFile(selectedFile);
  };

  const submitModelHandler = async () => {
    if (title && file) {
      await TDModelsApi.createNewModel(title, file);
    }
  };

  return (
    <>
      {(fileUrl && <ModelViewer fileUrl={fileUrl} />) || (
        <Inputs.FileDraggable onFileSelect={fileInputHandler} />
      )}
    </>
  );
};

export default CreateModel;
