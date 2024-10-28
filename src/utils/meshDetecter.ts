import { ThreeEvent } from "@react-three/fiber";
import { Mesh, MeshPhongMaterial } from "three";

const meshDetecter = (
  event: ThreeEvent<MouseEvent>,
  handleMaterial: (material: MeshPhongMaterial) => void
) => {
  const selectedMesh = event.object as Mesh;

  if (selectedMesh.isMesh) {
    const material = selectedMesh.material;

    if (Array.isArray(material)) {
      material.forEach((mat) => {
        if (mat instanceof MeshPhongMaterial) {
          handleMaterial(mat);
        }
      });
    } else if (material instanceof MeshPhongMaterial) {
      handleMaterial(material);
    }

    console.log("Selected Mesh:", selectedMesh);
  }
};

export default meshDetecter;
