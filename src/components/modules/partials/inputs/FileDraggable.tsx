import convertFBXToGLB from "@/utils/fbxToGltfConverter";
import getFileUrl from "@/utils/getFileUrl";
import Image from "next/image";
import React, { ChangeEvent, DragEvent, FC } from "react";

interface IFilterInputProps {
  onFileSelect: (fileUrl: string, file: File) => void;
}

const FileDraggable: FC<IFilterInputProps> = ({ onFileSelect }) => {
  const dragOverHandler = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const dropHandler = async (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    if (file) {
      const convertedFile = await convertFBXToGLB(file);
      const fileUrl = getFileUrl(convertedFile);
      if (fileUrl) {
        onFileSelect(fileUrl, convertedFile[0]);
      }
    }
  };

  const fileChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      const convertedFile = await convertFBXToGLB(file);
      const fileUrl = getFileUrl(convertedFile);
      if (fileUrl) {
        onFileSelect(fileUrl, convertedFile[0]);
      }
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden h-screen"
      onDragEnd={dragOverHandler}
      onDrop={dropHandler}
    >
      <div className="md:flex h-full">
        <div className="w-full h-full">
          <div className="relative h-full rounded-lg border-2 border-blue-500 bg-gray-800 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="absolute flex flex-col items-center">
              <Image
                src="/assets/file.png"
                alt="File icon"
                width={80}
                height={80}
                className="mb-5"
              />
              <span className="block text-gray-500 font-semibold">
                Drag & drop your files here
              </span>
              <span className="block text-gray-400 font-normal mt-1">
                or click to upload
              </span>
            </div>
            <input
              onChange={fileChangeHandler}
              name=""
              className="h-full w-full opacity-0 cursor-pointer"
              type="file"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDraggable;
