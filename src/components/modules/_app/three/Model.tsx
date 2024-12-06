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

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const { scene: model } = useGLTF(fileUrl);
  const [selectedMaterial, setSelectedMaterial] = useState<Object3D>();

  // useEffect(() => {
  //   if (selectedMaterial) {
  //     meshDetecter(selectedMaterial as Mesh, (material: Material) => {
  //       if (
  //         material instanceof MeshPhongMaterial ||
  //         material instanceof MeshStandardMaterial
  //       ) {
  //         material.color.set(objColor);
  //       }
  //     });
  //   }
  // }, [objColor, selectedMaterial]);

  // const meshSelectHandler = (event: ThreeEvent<MouseEvent>) => {
  //   setSelectedMaterial(event.object);
  //   meshDetecter(event.object as Mesh, (material: Material) => {
  //     if (
  //       material instanceof MeshPhongMaterial ||
  //       material instanceof MeshStandardMaterial
  //     ) {
  //       material.color.set(objColor);
  //     }
  //   });
  // };

  return (
    <>
      <primitive
        object={model}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
        scale={1}
        // onClick={meshSelectHandler}
      />
    </>
  );
};

export default Model;
