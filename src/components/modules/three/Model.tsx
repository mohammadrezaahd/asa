import meshDetecter from "@/utils/meshDetecter";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { FC, useEffect, useState } from "react";
import { Mesh, MeshPhongMaterial, Object3D } from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";

interface IModelProps {
  fileUrl: string;
}

const Model: FC<IModelProps> = ({ fileUrl }) => {
  const fbx = useLoader(FBXLoader, fileUrl);

  const [selectedMaterial, setSelectedMaterial] = useState<Object3D>();
  const [objColor, setObjColor] = useState("#fff");

  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: { value: -Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  useControls("Object color", {
    visible: {
      value: true,
      onChange: (v) => {
        if (selectedMaterial?.visible) {
          selectedMaterial.visible = v;
        }
      },
    },
    color: {
      value: objColor,
      onChange: (v) => {
        setObjColor(v);
      },
    },
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const handleMaterial = (material: MeshPhongMaterial) => {
      setSelectedMaterial(event.object);
      material.color.set(objColor);
    };
    meshDetecter(event.object as Mesh, handleMaterial);
  };

  useEffect(() => {
    const handleMaterial = (material: MeshPhongMaterial) => {
      material.color.set(objColor);
    };
    if (selectedMaterial) {
      meshDetecter(selectedMaterial as Mesh, handleMaterial);
    }
  }, [objColor]);

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
