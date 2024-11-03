import { useModelControls } from "@/hooks/modelControlContext";
import React from "react";

const Lights: React.FC = () => {
  const { ambientLightRef, directionalLightRef, pointLightRef } =
    useModelControls();
  return (
    <>
      <ambientLight ref={ambientLightRef} />
      <directionalLight ref={directionalLightRef} />
      <pointLight ref={pointLightRef} />
    </>
  );
};

export default Lights;
