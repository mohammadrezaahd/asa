export interface ILight {
  type: string;
  color: string;
  isVisible: boolean;
  position: [number, number, number];
  setColor: (color: string) => void;
  setIsVisible: (isVisible: boolean) => void;
  setPosition: (x: number, y: number, z: number) => void;
}

export interface IOrbits {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
}
