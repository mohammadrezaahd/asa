export interface IProjectBase {
  _id: string;
  title: string;
  image: string;
  category: string;
  category_slug: string;
  orientation: "vertical" | "horizontal" | string;
  date?: string;
}

export interface IProjectDetails {
  intro?: {
    subtitle?: string;
    title?: string;
    bgImage?: string;
  };
  description?: {
    heading?: {
      title?: string;
      subtitle?: string;
    };
    content?: string;
    avatar?: {
      image?: string;
      name?: string;
      role?: string;
      text?: string;
    };
  };
  details?: {
    title?: string;
    items?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  gallery?: Array<{
    image?: string;
    alt?: string;
  }>;
  resume?: {
    title?: string;
    content?: string;
    signature?: {
      name?: string;
      role?: string;
      text?: string;
    };
    quote?: {
      text?: string;
      author?: string;
    };
  };
}

export interface IProject extends IProjectBase, IProjectDetails {}

export interface IProjectCreate extends Omit<IProject, "_id"> {
  imageFile?: File;
}
