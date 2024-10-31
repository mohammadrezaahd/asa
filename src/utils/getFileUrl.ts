const getFileUrl = (input: FileList | File[]) => {
  if (!input) {
    return;
  }
  const file = input[0];
  const fileUrl = URL.createObjectURL(file);
  return fileUrl;
};

export default getFileUrl;
