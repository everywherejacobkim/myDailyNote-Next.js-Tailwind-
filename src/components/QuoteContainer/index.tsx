import React, { ReactNode } from "react";
import classNames from "classnames";

interface QuoteContainerProps {
  children: ReactNode;
  className?: string;
}

const QuoteContainer = ({ children, className }: QuoteContainerProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col w-96 h-auto relative bg-[#fefae0] rounded-xl shadow-md mt-4 ml-4 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default QuoteContainer;
