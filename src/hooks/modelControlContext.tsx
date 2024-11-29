import React, { FC, ReactNode, useContext, useRef, useState } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import FileInput from "@/components/modules/inputs/FileInput";

interface IControlContext {
  objColor: string;
  setObjColor: (color: string) => void;
  textInput: string;
  setTextInput: (text: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  ambientLightRef: React.RefObject<THREE.AmbientLight>;
  directionalLightRef: React.RefObject<THREE.DirectionalLight>;
  pointLightRef: React.RefObject<THREE.PointLight>;
}

const ControlContext = React.createContext<IControlContext | undefined>(
  undefined
);

const ModelControls: FC<{ children: ReactNode }> = ({ children }) => {
  const [objColor, setObjColor] = useState("#ffffff");
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Lights ref
  const ambientLightRef = useRef<THREE.AmbientLight>(new THREE.AmbientLight());
  const directionalLightRef = useRef<THREE.DirectionalLight>(
    new THREE.DirectionalLight()
  );
  const pointLightRef = useRef<THREE.PointLight>(new THREE.PointLight());

  // Text input control
  useControls("Model name", {
    title: {
      value: textInput,
      onChange: (v) => setTextInput(v),
    },
  });

  // File input control
  useControls("File Input", {
    file: {
      value: 0,
      onChange: (v) => {
        if (v instanceof File) {
          setFile(v);
        }
      },
      inputType: "file",
      component: (
        <FileInput
          onFileSelect={() => {
            console.log("first");
          }}
        />
      ),
    },
  });

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

  // Object color
  useControls("Object Color", {
    color: {
      value: objColor,
      onChange: (color) => setObjColor(color),
    },
  });

  const controls: IControlContext = {
    objColor,
    setObjColor,
    textInput,
    setTextInput,
    file,
    setFile,
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
