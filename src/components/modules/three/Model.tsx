import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { FC } from "react";
import { MeshPhongMaterial } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const fbx = useLoader(FBXLoader, fileUrl);

  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const handleMaterial = (material: MeshPhongMaterial) => {
      material.color.set("blue");
    };
    meshDetecter(event, handleMaterial);
  };

  return (
    <primitive
      object={fbx}
      rotation={[rotationX, rotationY, rotationZ]}
      onClick={handleClick}
      onMouseEnter={() => console.log("Mouse entered")}
      onMouseLeave={() => {
        console.log("Mouse left");
      }}
    />
  );
};

export default Model;
