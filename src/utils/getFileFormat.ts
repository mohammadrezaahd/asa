const getFileFormat = (file: FileList) => {
  return file[0].name.split(".").pop();
};

export default getFileFormat;
