import { TDModelsApi } from "@/components/api/TDModels";
import { Buttons } from "@/components/modules/partials/buttons";
import { ITDModelCreate } from "@/interfaces/DTOs/tDModels";
import { FC } from "react";

interface ISubmitBtnProps {
  data: ITDModelCreate;
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ data }) => {
  const submitModelHandler = async () => {
    try {
      const res = await TDModelsApi.createNewModel(data);
      console.log(res);
    } catch (err) {
      console.log("ERROR =>>", err);
      throw new Error("Unknown error occurred");
    }
  };

  return <Buttons.Basic onClick={submitModelHandler} />;
};

export default SubmitBtn;
