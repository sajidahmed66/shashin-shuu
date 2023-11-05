import { IUploadImageCard } from "@/libs/types";
import { ChangeEvent, FC, useRef } from "react";

const UploadImageCard: FC<IUploadImageCard> = ({ handleUpload }) => {
  const uploadImageDivRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="flex items-center justify-center w-full h-full border-4 border-gray-500 border-dotted cursor-pointer min-h-64"
      onClick={() => uploadImageDivRef.current?.click()}
    >
      Add A image
      <input
        type="file"
        hidden
        multiple
        accept="image/*"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (files) {
            // const filesArr: File[] = Array.from(files);
            handleUpload(files[0]);
          }
        }}
        ref={uploadImageDivRef}
      />
    </div>
  );
};

export default UploadImageCard;
