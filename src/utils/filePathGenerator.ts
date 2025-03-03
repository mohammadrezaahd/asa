import environments from "@/helpers/configurations";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const storage = environments.storage;

const filePathGenerator = async (
  file: FormDataEntryValue | null,
  folder: string
) => {
  if (!(file instanceof Blob)) {
    throw new TypeError("Expected file to be a Blob or File");
  }
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = Date.now() + (file as File).name;
  const dirPath = path.join(
    process.cwd(),
    `${storage.storage_directory}/${storage.storage_folder}/${
      folder.length ? folder : "spam"
    }`
  );
  const filePath = path.join(dirPath, fileName);

  await mkdir(dirPath, { recursive: true });

  await writeFile(filePath, buffer);
  return fileName;
};

export default filePathGenerator;
