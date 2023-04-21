import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MemoContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col w-96 pb-10 h-auto relative bg-yellow-200 rounded-xl shadow-md mt-20 ml-20 mr-20">
      {children}
    </div>
  );
};

export default MemoContainer;
