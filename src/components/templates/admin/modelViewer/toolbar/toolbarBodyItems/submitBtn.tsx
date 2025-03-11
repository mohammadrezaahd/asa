import { TDModelsApi } from "@/components/api/TDModels.api";
import AppButton from "@/components/modules/partials/buttons/Button";
import { ITDModelCreate } from "@/interfaces/DTOs/tDModels";
import { FC, useState } from "react";

interface ISubmitBtnProps {
  data: ITDModelCreate;
}

const SubmitBtn: FC<ISubmitBtnProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitModelHandler = async () => {
    try {
      setIsLoading(true);
      const res = await TDModelsApi.createNewModel(data);
      console.log(res);
    } catch (err) {
      console.log("ERROR =>>", err);
      throw new Error("Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <AppButton loading={isLoading} fullWidth onClick={submitModelHandler}>
        Submit post
      </AppButton>
    </div>
  );
};

export default SubmitBtn;
