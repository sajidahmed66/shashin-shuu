import { ReactNode } from "react";

// all  type interfaces lives here
export interface IImageCollectionData {
  id: number;
  imgSrc: string | File;
}

export interface IHeaderProp {
  selectedImgCount: number;
  handleDelete: () => void;
  handleToggleAllSelected: () => void;
}

export interface ICardProps {
  index: number;
  img: IImageCollectionData;
  toggleChecked: (id: number) => void;
  isSelected: boolean;
  dropImage: (index: number) => void;
  dragImage: (index: number) => void;
  dragOverImage: (index: number) => void;
  handleImageToIndexDrop: (index: number | null) => void;
  newDroppableIndex: number | null;
}

export interface IUploadImageCard {
  handleUpload: (imgFile: File) => void;
}

export interface IContainerProp {
  children: ReactNode;
}
