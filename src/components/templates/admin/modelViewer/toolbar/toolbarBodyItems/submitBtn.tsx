import { Buttons } from "@/components/modules/partials/buttons";
import { ITDModelCreate } from "@/interfaces/DTOs/tDModels";
import { FC } from "react";

interface ISubmitBtnProps {
  data: ITDModelCreate;
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ data }) => {
  const submitModelHandler = () => {
    console.log("first");
  };

  return <Buttons.Basic onClick={submitModelHandler} />;
};

export default SubmitBtn;
