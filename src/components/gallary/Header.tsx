import { IHeaderProp } from "@/libs/types";
import { FC } from "react";

const Header: FC<IHeaderProp> = ({
  selectedImgCount = 0,
  handleDelete,
  handleToggleAllSelected,
}) => {
  const HandleDeleteFiles = () => {
    if (selectedImgCount > 0) {
      handleDelete();
    } else {
      alert("no files selected");
    }
  };
  return (
    <div className="flex flex-row items-center justify-between h-20 px-6 border-b-2">
      <div className="flex flex-row items-center gap-4">
        <input
          type="checkbox"
          name="checkSelectd"
          id="none"
          checked={!!selectedImgCount}
          className="w-6 h-6"
          onChange={handleToggleAllSelected}
        />
        <p className="text-base font-bold">{`${selectedImgCount} files selected`}</p>
      </div>
      <div>
        <button onClick={HandleDeleteFiles}>
          <p className="text-base text-red-600 transition-all duration-200 scale-110 hover:font-bold">
            Delete File
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
