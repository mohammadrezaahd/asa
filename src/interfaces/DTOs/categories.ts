export interface ICategoryCreate {
  name: string;
  subs?: ICategoryCreate[];
}

export interface ICategoryGet extends ICategoryCreate {
  models: any[];
  _id:number
}
