import { FC } from "react";
import SingleHeader from "./header";
import SingleFooter from "./footer";
import SingleGallery from "./gallery";

interface ISingleTemplateProps {
  title: string;
  gallery: string[];
  id: string;
}

const SingleTemplate: FC<ISingleTemplateProps> = ({ gallery, title, id }) => {
  return (
    <>
      <div className="md:w-5/12 gap-y-5 flex flex-col justify-between">
        <SingleHeader title={title} />
        <SingleFooter id={id} />
      </div>
      <SingleGallery gallery={gallery} />
    </>
  );
};

export default SingleTemplate;
