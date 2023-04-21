import { FC } from "react";
import { BiCopyright } from "react-icons/bi";

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center pt-60 pb-20 text-white">
      <span>
        <BiCopyright />
        &nbsp; 2023 My-Daily-Note-Remastered by &nbsp; <b>Jacob Namhyung Kim</b>. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
