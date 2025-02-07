import environments from "@/helpers/configurations";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const storage = environments.storage;

const filePathGenerator = async (file: FormDataEntryValue | null) => {
  const buffer = Buffer.from(await (file as Blob).arrayBuffer());
  const fileName = Date.now() + (file as File).name;
  const dirPath = path.join(
    process.cwd(),
    `${storage.storage_directory}/${storage.storage_folder}/3dModelsd`
  );
  const filePath = path.join(dirPath, fileName);

  await mkdir(dirPath, { recursive: true });

  console.log("first ===>", filePath);
  await writeFile(filePath, buffer);
  return fileName;
};

export default filePathGenerator;
