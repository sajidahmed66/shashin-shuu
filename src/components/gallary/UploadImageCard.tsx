import { IUploadImageCard } from "@/libs/types";
import { FC } from "react";


const UploadImageCard: FC<IUploadImageCard> = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full border-4 border-gray-500 border-dotted cursor-pointer"
      onClick={() => console.log("image uploaded")}
    >
      Add a image
    </div>
  );
};

export default UploadImageCard;
