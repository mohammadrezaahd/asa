import { Button, Chip } from "@material-tailwind/react";
import Link from "next/link";
import { FC } from "react";
import { FaRegBookmark, FaShare } from "react-icons/fa";
import { PiCubeTransparentLight } from "react-icons/pi";

interface ISingleFooterProps {
  id: string;
}

const SingleFooter: FC<ISingleFooterProps> = ({ id }) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-around gap-1 flex-wrap w-3/5">
        <Chip size="sm" value="category1" />
        <Chip size="sm" value="category2" />
        <Chip size="sm" value="category3" />
        <Chip size="sm" value="category4" />
        <Chip size="sm" value="category5" />
        <Chip size="sm" value="category6" />
        <Chip size="sm" value="category7" />
      </div>
      <div className="flex justify-between">
        <Link href={`/modelViewer/view/${id}`}>
          <Button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <span className="ml-1 text-white">View 3D model</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex group perspective-1000">
              <PiCubeTransparentLight className="transition-transform duration-[1200ms] ease-out group-hover:rotate-[360deg] group-hover:rotate-y-[360deg] group-hover:rotate-x-[360deg]" />
            </div>
          </Button>
        </Link>
        <div className="flex gap-3 align-middle">
          <FaRegBookmark className="cursor-pointer" />
          <FaShare className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SingleFooter;
