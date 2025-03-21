export interface ITDModelBase {
  _id: string;
  title: string;
  thumbnail: string;
}

export interface ITDModelLight {
  type: string;
  position: [number, number, number];
  isVisible: boolean;
  color: string;
}

export interface ITDModelConfigs {
  rotation: [number, number, number];
  position: [number, number, number];
  scale: number;
  lights: ITDModelLight[];
}

export interface ITDModel extends ITDModelBase, ITDModelConfigs {
  categories: string[];
}

export interface ITDModelCreate extends ITDModel {
  file: File;
  thumbnailFile: File;
  gallery: File[];
}

export interface ITDModelGet extends ITDModel {
  file: string;
  gallery: string[];
}
