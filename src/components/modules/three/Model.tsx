import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { FC, useEffect, useState } from "react";
import { Mesh, MeshPhongMaterial } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const fbx = useLoader(FBXLoader, fileUrl);

  const [selectedMaterial, setSelectedMaterial] = useState<Mesh>();

  const { rotationX, rotationY, rotationZ, color } = useControls({
    rotationX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    color: { value: "#fff" },
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const handleMaterial = (material: MeshPhongMaterial) => {
      material.color.set(color);
    };
    meshDetecter(event, handleMaterial);
  };

  return (
    <primitive
      object={fbx}
      rotation={[rotationX, rotationY, rotationZ]}
      position={[0, 0, 0]}
      onClick={handleClick}
      onMouseEnter={() => console.log("Mouse entered")}
      onMouseLeave={() => {
        console.log("Mouse left");
      }}
    />
  );
};

export default Model;
