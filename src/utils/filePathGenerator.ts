import { put } from "@vercel/blob";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import environments from "@/helpers/configurations";
import isProduction from "./isProduction";

const storage = environments.storage;

const filePathGenerator = async (
  file: FormDataEntryValue | null,
  folder: string
) => {
  if (!(file instanceof Blob)) {
    throw new TypeError("Expected file to be a Blob or File");
  }

  const fileName = Date.now() + (file as File).name;

  if (isProduction()) {
    const { url } = await put(`uploads/${folder}/${fileName}`, file, {
      access: "public",
    });
    return url;
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const dirPath = path.join(
    process.cwd(),
    `${storage.storage_directory}/${storage.storage_folder}/${folder || "spam"}`
  );
  const filePath = path.join(dirPath, fileName);

  await mkdir(dirPath, { recursive: true });
  await writeFile(filePath, buffer);

  return fileName; // فقط نام فایل را برمی‌گردانیم
};

export default filePathGenerator;
