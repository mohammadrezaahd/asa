import FileDraggable from "@/components/modules/partials/inputs/FileDraggable";
import { Tooltips } from "@/components/modules/partials/tooltips";
import Image from "next/image";
import { FC, useRef } from "react";

interface IThumbnail {
  img: Record<"file" | "fileUrl", File | string>;
  setImg: (file: File, fileUrl: string) => void;
}

const Thumbnail: FC<IThumbnail> = ({ img, setImg }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileInputHandler = (selectedFileUrl: string, selectedFile: File) => {
    setImg(selectedFile, selectedFileUrl);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full h-[200px]">
      {img.fileUrl ? (
        <Tooltips.Basic content="Replace photo">
          <div>
            <Image
              src={img.fileUrl as string}
              alt="File icon"
              width={100}
              height={100}
              className="mb-5 w-full h-52 object-cover object-center cursor-pointer"
              onClick={handleImageClick}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.png,.jpeg"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  const fileUrl = URL.createObjectURL(file);
                  fileInputHandler(fileUrl, file);
                }
              }}
            />
          </div>
        </Tooltips.Basic>
      ) : (
        <FileDraggable
          onFileSelect={fileInputHandler}
          fileFormat={[".jpg", ".png", ".jpeg"]}
          className="!h-full"
        />
      )}
    </div>
  );
};

export default Thumbnail;
