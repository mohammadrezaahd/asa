import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent } from "@react-three/fiber";
import { FC, useEffect, useState } from "react";
import {
  Material,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  Object3D,
} from "three";
import { useGLTF } from "@react-three/drei";
import { useModelControls } from "@/hooks/modelControlContext";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const { scene: model } = useGLTF(fileUrl);

  const [selectedMaterial, setSelectedMaterial] = useState<Object3D>();
  const { objColor, rotation, scale, position } = useModelControls();

  useEffect(() => {
    if (selectedMaterial) {
      meshDetecter(selectedMaterial as Mesh, (material: Material) => {
        if (
          material instanceof MeshPhongMaterial ||
          material instanceof MeshStandardMaterial
        ) {
          material.color.set(objColor);
        }
      });
    }
  }, [objColor, selectedMaterial]);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    setSelectedMaterial(event.object);
    meshDetecter(event.object as Mesh, (material: Material) => {
      if (
        material instanceof MeshPhongMaterial ||
        material instanceof MeshStandardMaterial
      ) {
        material.color.set(objColor); // تنظیم رنگ انتخاب شده به objColor
      }
    });
  };
  return (
    <>
      <primitive
        object={model}
        rotation={rotation}
        position={position}
        scale={scale}
        onClick={handleClick}
      />
    </>
  );
};

export default Model;
