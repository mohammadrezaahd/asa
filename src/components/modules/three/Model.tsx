import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FC, useEffect, useState } from "react";
import { Mesh, MeshPhongMaterial, Object3D } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import { ModelControls } from "./Controls";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const fbx = useLoader(FBXLoader, fileUrl);

  const [selectedMaterial, setSelectedMaterial] = useState<Object3D>();
  const [objColor, setObjColor] = useState("#fff");

  useEffect(() => {
    const handleMaterial = (material: MeshPhongMaterial) => {
      material.color.set(objColor);
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
    const handleMaterial = (material: MeshPhongMaterial) => {
      setSelectedMaterial(event.object);
      material.color.set(objColor);
    };
    meshDetecter(event.object as Mesh, handleMaterial);
  };

  return (
    <primitive
      object={fbx}
      rotation={[rotationX, rotationY, rotationZ]}
      position={[0, 0, 0]}
      onClick={handleClick}
    />
  );
};

export default Model;
