import { FBXLoader, GLTFExporter } from "three/examples/jsm/Addons.js";

const convertFBXToGLB = async (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const fbxLoader = new FBXLoader();
      const fbx = fbxLoader.parse(event.target.result);

      const exporter = new GLTFExporter();
      exporter.parse(fbx, (gltf) => {
        const blob = new Blob([JSON.stringify(gltf)], {
          type: "application/octet-stream",
        });
        resolve(URL.createObjectURL(blob));
      });
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

export default convertFBXToGLB;
