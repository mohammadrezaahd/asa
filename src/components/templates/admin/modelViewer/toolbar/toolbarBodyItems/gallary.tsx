import AppButton from "@/components/modules/partials/buttons/Button";
import AppModal from "@/components/modules/partials/modals/Modal";
import AppTooltip from "@/components/modules/partials/tooltips/Tooltip";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoCloudUpload, IoClose } from "react-icons/io5";

interface ModelGalleryProps {
  selectedFiles: File[];
  setSelectedFiles: (files: File[]) => void;
}

const ModelGallery: FC<ModelGalleryProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const [selectedFilesUrl, setSelectedFilesUrl] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      const filesUrlArray = filesArray.map((file) => URL.createObjectURL(file));
      setSelectedFilesUrl(filesUrlArray);
    }
  };

  useEffect(() => {
    const fileUrl = selectedFiles.map((item) => URL.createObjectURL(item));
    setSelectedFilesUrl(fileUrl);
  }, [selectedFiles]);

  return (
    <>
      <input
        type="file"
        multiple
        accept="image/*"
        id="file-input"
        className="hidden"
        onChange={handleFileChange}
      />
      <AppTooltip content="Add images">
        <AppButton onClick={() => setIsOpen(true)}>
          <IoCloudUpload />
        </AppButton>
      </AppTooltip>
      <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>Select rendered images</div>
        <div>
          {selectedFilesUrl.length >= 1 && (
            <div className="flex justify-start gap-5 flex-wrap">
              {selectedFilesUrl.map((item, index) => (
                <div key={index} className="relative group">
                  <Image
                    className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={item}
                    alt="nature image"
                    width={170}
                    height={170}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <AppTooltip content="remove photo">
                      <IoClose
                        className="text-white text-2xl cursor-pointer"
                        color="red"
                        onClick={() => {
                          const newSelectedFiles = selectedFiles.filter(
                            (_, i) => i !== index
                          );
                          setSelectedFiles(newSelectedFiles);
                        }}
                      />
                    </AppTooltip>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-5 justify-end">
          <AppButton
            color="blue"
            onClick={() => {
              console.log("first");
            }}
          >
            Select from library
          </AppButton>
          <AppButton
            color="blue"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            Upload from your system
          </AppButton>
        </div>
      </AppModal>
    </>
  );
};

export default ModelGallery;
