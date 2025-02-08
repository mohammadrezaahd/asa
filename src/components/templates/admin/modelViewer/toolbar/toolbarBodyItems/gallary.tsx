import AppButton from "@/components/modules/partials/buttons/Button";
import AppTooltip from "@/components/modules/partials/tooltips/Tooltip";
import { FC, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

const ModelGallery: FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      console.log(filesArray);
    }
  };

  return (
    <>
      {/* <input
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        id="file-input"
        onChange={handleFileChange}
      />
      <Buttons.Basic
        variant="gradient"
        fullWidth
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <div className="flex items-center justify-center gap-5">
          {selectedFiles.length === 0 ? (
            <>
              Upload Rendered images
              <IoCloudUpload size={30} />
            </>
          ) : (
            <>
              {`${selectedFiles.length} file${
                selectedFiles.length > 1 ? "s" : ""
              } selected`}
            </>
          )}
        </div>
      </Buttons.Basic> */}

      <AppTooltip content="asd">
        <AppButton onClick={() => console.log("first")}>asd</AppButton>
      </AppTooltip>
    </>
  );
};

export default ModelGallery;
