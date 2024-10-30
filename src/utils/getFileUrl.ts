import { ChangeEvent } from "react";

const getFileUrl = (input: FileList) => {
  if (!input) {
    return;
  }
  const file = input[0];
  const fileUrl = URL.createObjectURL(file);
  return fileUrl;
};

export default getFileUrl;
