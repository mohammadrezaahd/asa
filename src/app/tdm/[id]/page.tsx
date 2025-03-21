"use client";
import { TDModelsApi } from "@/components/api/TDModels.api";
import SingleTemplate from "@/components/templates/single";
import { ITDModelGet } from "@/interfaces/DTOs/tDModels";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const SingleModel: FC = () => {
  const { id } = useParams();
  const [model, setModel] = useState<ITDModelGet | null>(null);

  useEffect(() => {
    const getModel = async () => {
      if (id) {
        const res = await TDModelsApi.getModelById(id as string);
        setModel(res.data);
      }
    };
    getModel();
  }, [id]);

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:flex justify-between mx-10 gap-5">
      <SingleTemplate
        title={model.title}
        gallery={model.gallery}
        id={model._id}
      />
    </div>
  );
};

export default SingleModel;
