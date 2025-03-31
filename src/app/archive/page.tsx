"use client";
import { TDModelsApi } from "@/components/api/TDModels.api";
import { Cards } from "@/components/modules/partials/cards";
import { ITDModelBase } from "@/interfaces/DTOs/tDModels";
import { FC, useEffect, useState } from "react";

const Archive: FC = () => {
  const [data, setData] = useState<ITDModelBase[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await TDModelsApi.getModels();
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-around">
      {data.map((item) => (
        <div key={item._id}>
          <Cards.Card1
            imageUrl={`/${item.thumbnail}`}
            link={`/tdm/${item._id}`}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Archive;
