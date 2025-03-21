"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ModelViewer from "@/components/modules/_app/three";
import useCurrentUser from "@/hooks/currentUserContext";
import useIsAdmin from "@/hooks/isAdminContext";
import { Inputs } from "@/components/modules/partials/inputs";

const CreateModel = () => {
  const { mode, id } = useParams();
  const router = useRouter();
  const currentUser = useCurrentUser();
  const isAdmin = useIsAdmin(currentUser.role);

  const [fileUrl, setFileUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (mode !== "create" && mode !== "view") {
      router.push("/404");
    }
  }, [mode, router]);

  const fileInputHandler = (selectedFileUrl: string, selectedFile: File) => {
    setFileUrl(selectedFileUrl);
    setFile(selectedFile);
  };

  if (mode === "create" && !isAdmin) {
    return <div>Access Denied</div>;
  }

  return (
    <>
      {mode === "create" &&
        isAdmin &&
        ((file && fileUrl && (
          <ModelViewer fileUrl={fileUrl} file={file} isAdmin={isAdmin} />
        )) || (
          <Inputs.FileDraggable
            onFileSelect={fileInputHandler}
            fileFormat={[".glb"]}
          />
        ))}
      {mode === "view" && (
        <ModelViewer fileUrl={id as string} isAdmin={isAdmin} />
      )}
    </>
  );
};

export default CreateModel;
