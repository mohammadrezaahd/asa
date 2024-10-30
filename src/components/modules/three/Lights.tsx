import { useRef } from "react";
import * as THREE from "three";
import { ModelControls } from "./Controls";
import { ILights } from "@/types/components/global/controls";

const Lights = () => {
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);

  const lights: ILights[] = [
    { label: "Ambient light", ref: ambientLightRef, element: <ambientLight /> },
    {
      label: "Directional light",
      ref: directionalLightRef,
      element: <directionalLight />,
    },
    { label: "Point light", ref: pointLightRef, element: <pointLight /> },
  ];

  return (
    <>
      <ModelControls.LightControls lights={lights} />
    </>
  );
};

export default Lights;
