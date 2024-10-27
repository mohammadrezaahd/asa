"use client";

import { ChangeEvent, useState } from "react";
import { Modules } from "@/components/modules";

const MyHome = () => {
  const [fileUrl, setFileUrl] = useState<string>();
  const fileInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const fbxUrl = URL.createObjectURL(file);

    setFileUrl(fbxUrl);
  };

  return (
    <>
      {(fileUrl && <Modules.ModelViewer fileUrl={fileUrl} />) || (
        <input type="file" accept=".fbx" onChange={fileInputHandler} />
      )}
    </>
  );
};

export default MyHome;
