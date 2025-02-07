import { FC } from "react";
import { useGLTF } from "@react-three/drei";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const { scene: model } = useGLTF(fileUrl);

  return (
    <>
      <primitive object={model} />
    </>
  );
};

export default Model;
