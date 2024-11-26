// hooks/ControlContext.ts
import React, { FC, ReactNode, useContext, useRef, useState, useEffect } from "react";
import { useControls } from "leva";
import * as THREE from "three";

interface IControlContext {
  rotation: [number, number, number];
  setRotation: (rotation: [number, number, number]) => void;
  scale: number;
  position: [number, number, number];
  setPosition: (position: [number, number, number]) => void;
  objColor: string;
  setObjColor: (color: string) => void;
  ambientLightRef: React.RefObject<THREE.AmbientLight>;
  directionalLightRef: React.RefObject<THREE.DirectionalLight>;
  pointLightRef: React.RefObject<THREE.PointLight>;
}

const ControlContext = React.createContext<IControlContext | undefined>(
  undefined
);

const ModelControls: FC<{ children: ReactNode }> = ({ children }) => {
  const [objColor, setObjColor] = useState("#ffffff");
  const [rotationState, setRotationState] = useState<[number, number, number]>([
    -Math.PI / 2,
    0,
    Math.PI,
  ]);
  const [positionState, setPositionState] = useState<[number, number, number]>([
    0,
    0,
    0,
  ]);

  const setRotation = (rotation: [number, number, number]) => {
    setRotationState((prev) => {
      rotationControls.x = rotation[0];
      rotationControls.y = rotation[1];
      rotationControls.z = rotation[2];
      return rotation;
    });
  };

  const setPosition = (position: [number, number, number]) => {
    setPositionState(position);
  };

  // Lights ref
  const ambientLightRef = useRef<THREE.AmbientLight>(new THREE.AmbientLight());
  const directionalLightRef = useRef<THREE.DirectionalLight>(
    new THREE.DirectionalLight()
  );
  const pointLightRef = useRef<THREE.PointLight>(new THREE.PointLight());

  // Lights controls
  useControls("Ambient Light", {
    visible: {
      value: true,
      onChange: (v) => {
        if (ambientLightRef.current) ambientLightRef.current.visible = v;
      },
    },
    color: {
      value: "#ffffff",
      onChange: (v) => {
        if (ambientLightRef.current) ambientLightRef.current.color.set(v);
      },
    },
    position: {
      value: { x: 0, y: 5, z: 0 },
      onChange: ({ x, y, z }) => {
        if (ambientLightRef.current)
          ambientLightRef.current.position.set(x, y, z);
      },
    },
  });

  useControls("Directional Light", {
    visible: {
      value: true,
      onChange: (v) => {
        if (directionalLightRef.current)
          directionalLightRef.current.visible = v;
      },
    },
    color: {
      value: "#ffffff",
      onChange: (v) => {
        if (directionalLightRef.current)
          directionalLightRef.current.color.set(v);
      },
    },
    position: {
      value: { x: 5, y: 5, z: 5 },
      onChange: ({ x, y, z }) => {
        if (directionalLightRef.current)
          directionalLightRef.current.position.set(x, y, z);
      },
    },
  });

  useControls("Point Light", {
    visible: {
      value: true,
      onChange: (v) => {
        if (pointLightRef.current) pointLightRef.current.visible = v;
      },
    },
    color: {
      value: "#ffffff",
      onChange: (v) => {
        if (pointLightRef.current) pointLightRef.current.color.set(v);
      },
    },
    position: {
      value: { x: -5, y: 5, z: -5 },
      onChange: ({ x, y, z }) => {
        if (pointLightRef.current) pointLightRef.current.position.set(x, y, z);
      },
    },
  });

  // Model controls
  const rotationControls = useControls("Model Rotation", {
    x: { value: rotationState[0], min: -Math.PI, max: Math.PI, step: 0.01 },
    y: { value: rotationState[1], min: -Math.PI, max: Math.PI, step: 0.01 },
    z: { value: rotationState[2], min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  const scale = useControls("Model Scale", { value: 1 });
  const positionControls = useControls("Model Position", {
    x: { value: positionState[0], min: -10, max: 10, step: 0.1 },
    y: { value: positionState[1], min: -10, max: 10, step: 0.1 },
    z: { value: positionState[2], min: -10, max: 10, step: 0.1 },
  });

  // Object color
  useControls("Object Color", {
    color: {
      value: objColor,
      onChange: (color) => setObjColor(color),
    },
  });

  useEffect(() => {
    setRotation([rotationControls.x, rotationControls.y, rotationControls.z]);
  }, [rotationControls]);

  useEffect(() => {
    setPosition([positionControls.x, positionControls.y, positionControls.z]);
  }, [positionControls]);

  const controls: IControlContext = {
    rotation: [rotationControls.x, rotationControls.y, rotationControls.z],
    setRotation,
    scale: scale.value,
    position: [positionControls.x, positionControls.y, positionControls.z],
    setPosition,
    objColor,
    setObjColor,
    ambientLightRef,
    directionalLightRef,
    pointLightRef,
  };

  return (
    <ControlContext.Provider value={controls}>
      {children}
    </ControlContext.Provider>
  );
};

// Hook
export const useModelControls = () => {
  const context = useContext(ControlContext);
  if (!context) {
    throw new Error("useModelControls must be used within a ModelControls");
  }
  return context;
};

export { ModelControls };
