import { FBXLoader, GLTFExporter } from "three/examples/jsm/Addons.js";

const convertFBXToGLB = async (fileList: FileList): Promise<File[]> => {
  const file = fileList[0];

  if (file.type === "model/vnd.fbx" || file.name.endsWith(".fbx")) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const result = event.target?.result;
        if (!result) {
          reject(new Error("Failed to load the file."));
          return;
        }

        const fbxLoader = new FBXLoader();
        const fbx = fbxLoader.parse(result, "");

        const exporter = new GLTFExporter();
        exporter.parse(
          fbx,
          (gltf) => {
            const blob = new Blob([JSON.stringify(gltf)], {
              type: "model/gltf-binary",
            });

            // استخراج نام فایل اصلی و اضافه کردن پسوند converted
            const originalName = file.name.replace(/\.[^/.]+$/, "");
            const glbFileName = `${originalName}-converted.glb`;

            const glbFile = new File([blob], glbFileName, {
              type: "model/gltf-binary",
            });
            resolve([glbFile]);
          },
          (error) => {
            reject(error);
          }
        );
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  } else if (
    file.type === "model/gltf-binary" ||
    file.name.endsWith(".gltf") ||
    file.name.endsWith(".glb")
  ) {
    return Promise.resolve([file]);
  } else {
    throw new Error(
      "Unsupported file format. Only FBX, GLTF, and GLB are supported."
    );
  }
};

export default convertFBXToGLB;
