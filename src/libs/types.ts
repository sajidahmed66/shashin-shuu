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
}

export interface IUploadImageCard {
  handleUpload: () => void;
}

export interface IContainerProp {
  children: ReactNode;
}
