export interface ITDModel {
  title: string;
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ITDModelLight[];
  categories: string[];
}

export interface ITDModelCreate extends ITDModel {
  file: File;
  thumbnail: File;
  gallery: File[];
}
export interface ITDModelGet extends ITDModel {
  _id: number;
  file: string;
  thumbnail: string;
  gallery: string[];
}

export interface ITDModelLight {
  type: string;
  position: [number, number, number];
  isVisible: boolean;
  color: string;
}

export interface ICategory {
  name: string;
}
