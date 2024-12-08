export interface ILights {
  color: string;
  position: [0, 0, 0];
  intensity: number;
  visible: boolean;
}

export interface IOrbits {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}
