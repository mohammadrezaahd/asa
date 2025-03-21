import { Gallery } from "@/components/modules/partials/gallery";
import { FC } from "react";

interface ISingleGalleryProps {
  gallery: string[];
}

const SingleGallery: FC<ISingleGalleryProps> = ({ gallery }) => {
  return (
    <div className="md:w-7/12">
      <Gallery.Featured data={gallery} />
    </div>
  );
};

export default SingleGallery;
