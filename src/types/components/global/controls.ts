import { MutableRefObject } from "react";
import * as THREE from "three";

export interface ILights {
  label: string;
  element: JSX.Element;
  ref: MutableRefObject<THREE.Light | null>;
}

export interface IOrbits {
  rotation: [number, number, number];
  position: [number, number, number];
}
