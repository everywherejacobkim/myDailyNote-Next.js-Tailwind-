import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";

const AppHead = () => {
  const date = new Date();
  const today = date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const day = date.toLocaleDateString("en-CA", {
    weekday: "long",
  });

  return (
    <div className="px-32 pt-48 pb-24 border-b border-gray-300 mb-15 text-white">
      <nav>
        <Link href="/">
          <div className="text-white no-underline">
            <RiArrowGoBackFill className="text-white text-4xl absolute top-10 left-6 cursor-pointer" />
          </div>
        </Link>
      </nav>
      <h1 className="font-bold text-5xl uppercase mb-3 tracking-wider">
        {today}
      </h1>
      <div className="text-3xl mb-10 tracking-wide">{day}</div>
    </div>
  );
};

export default AppHead;
