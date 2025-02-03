export interface ITDModel {
  title: string;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ITDModelLight[];
}

export interface ITDModelCreate extends ITDModel {
  file: File;
  thumbnail: File;
}
export interface ITDModelGet extends ITDModel {
  file: string;
  thumbnail: string;
}

export interface ITDModelLight {
  type: string;
  position: [number, number, number];
  isVisible: boolean;
  color: string;
}
