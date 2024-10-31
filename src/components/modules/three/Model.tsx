import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FC, useEffect, useState } from "react";
import {
  Material,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  Object3D,
} from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import { ModelControls } from "./Controls";
import { useGLTF } from "@react-three/drei";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const { scene: model } = useGLTF(fileUrl);

  const [selectedMaterial, setSelectedMaterial] = useState<Object3D>();
  const [objColor, setObjColor] = useState("#fff");

  useEffect(() => {
    const handleMaterial = (material: Material) => {
      if (
        material instanceof MeshPhongMaterial ||
        material instanceof MeshStandardMaterial
      ) {
        material.color.set(objColor);
      }
    };

    if (selectedMaterial) {
      meshDetecter(selectedMaterial as Mesh, handleMaterial);
    }
  }, [objColor]);

  ModelControls.objectColorControls({
    objColor,
    setObjColor,
  });

  const [rotationX, rotationY, rotationZ] = ModelControls.rotationControl();

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const handleMaterial = (material: Material) => {
      setSelectedMaterial(event.object);
      if (
        material instanceof MeshPhongMaterial ||
        material instanceof MeshStandardMaterial
      ) {
        material.color.set(objColor);
      }
    };
    meshDetecter(event.object as Mesh, handleMaterial);
  };

  return (
    <primitive
      object={model}
      rotation={[rotationX, rotationY, rotationZ]}
      position={[0, 0, 0]}
      onClick={handleClick}
    />
  );
};

export default Model;
