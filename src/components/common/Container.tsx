import { IContainerProp } from "@/libs/types";
import { FC } from "react";

const Container: FC<IContainerProp> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
