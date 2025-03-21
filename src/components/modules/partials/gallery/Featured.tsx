import Image from "next/image";
import { FC, useState } from "react";

interface IFeatuedProps {
  data: string[];
}

const Featured: FC<IFeatuedProps> = ({ data }) => {
  const [active, setActive] = useState(data[0]);

  return (
    <div className="grid gap-4">
      <div className="relative h-48 md:h-[480px] w-full">
        <Image
          className="object-cover object-center rounded-sm"
          src={`/${active}`}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div key={index} className="relative h-20 w-full">
            <Image
              onClick={() => setActive(item)}
              src={`/${item}`}
              className="cursor-pointer object-cover object-center rounded-sm"
              alt="gallery-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
