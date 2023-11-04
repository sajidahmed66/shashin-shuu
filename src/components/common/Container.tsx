import React, { FC, ReactNode } from "react";
interface IContainerProp {
  children: ReactNode;
}
const Container: FC<IContainerProp> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
