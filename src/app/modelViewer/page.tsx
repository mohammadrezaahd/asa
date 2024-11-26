"use client";

import { useState } from "react";
import { Modules } from "@/components/modules";
import { TDModelsApi } from "@/api/TDModels";

const ModelViewer = () => {
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
      <div>
        <input
          type="text"
          placeholder="File title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {(fileUrl && <Modules.ModelViewer fileUrl={fileUrl} />) || (
        <Modules.FileInput onFileSelect={fileInputHandler} />
      )}
      <button onClick={submitModelHandler}>SUBMIT</button>
    </>
  );
};

export default ModelViewer;
