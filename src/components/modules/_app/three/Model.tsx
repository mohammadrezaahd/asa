import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const { scene: model } = useGLTF(fileUrl);

  const materials = useLoader(MTLLoader, "/tdm/asd.mtl");
  const obj = useLoader(OBJLoader, "/tdm/asd.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  // const asd = useLoader(Loader)

  return (
    <>
      <primitive object={obj} />
    </>
  );
};

export default Model;
