import { ICardProps } from "@/libs/types";
import { FC } from "react";
import { twJoin } from "tailwind-merge";

const Card: FC<ICardProps> = ({
  img,
  index,
  toggleChecked,
  isSelected,
  dragImage,
  dragOverImage,
  dropImage,
  handleImageToIndexDrop,
  newDroppableIndex,
}) => {
  return (
    <div
      className={twJoin(
        index === 0 && "col-span-2 row-span-2",
        "group relative cursor-pointer rounded-md",
        newDroppableIndex === index &&
          "opacity-60 border-2 border-gray-500 transition-opacity-300 border-opacity-50 rounded-5",
        "border-gray-50 border-2 before:inset-0 before:absolute before:block before:content-normal before:w-full before:h-full before:rounded before:transition-all before:duration-700  before:ease-in-out before:hover:bg-gray-100 before:opacity-40"
      )}
      key={index}
      draggable={true}
      onDrop={() => dropImage(index)}
      onDragStart={() => dragImage(index)}
      onDragLeave={() => handleImageToIndexDrop(null)}
      onDragOver={(e) => {
        e.preventDefault();
        handleImageToIndexDrop(index);
        dragOverImage(index);
      }}
    >
      <img
        src={
          typeof img.imgSrc === "string"
            ? img.imgSrc
            : URL.createObjectURL(img.imgSrc)
        }
        className={twJoin(
          "w-full h-full overflow-hidden",
          isSelected && "opacity-60"
        )}
      />
      <div
        className={twJoin(
          "absolute h-6 w-6 bg-white top-7 left-7 justify-center items-center text-lg group-hover:flex",
          isSelected ? "flex" : "hidden"
        )}
        onClick={() => toggleChecked(img.id)}
      >
        <input
          type="checkbox"
          className="w-full h-full"
          name=""
          id=""
          // checked={}
        />
      </div>
    </div>
  );
};

export default Card;
