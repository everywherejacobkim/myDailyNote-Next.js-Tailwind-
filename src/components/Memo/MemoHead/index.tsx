import { FC, useState } from "react";
import MemoModal from "../MemoModal";

const MemoHead: FC<{ memo: string[], setMemo: (memo: string[]) => void }> = ({ memo, setMemo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="flex justify-between items-center relative py-24 px-32 pb-35 border-b border-gray-300">
        <h1 className="text-4xl font-bold text-green-500 leading-5 mb-4">Memo</h1>
        <h6 className="absolute top-3/4 left-2 font-bold text-md">A weak note is better than a strong memory</h6>
        <button className="rounded-md bg-green-600 text-white font-bold px-4 py-2 hover:bg-green-700" onClick={handleShow}>
          Add New
        </button>
      </div>
      <MemoModal memo={memo} setMemo={setMemo} show={show} handleClose={handleClose} />
    </>
  );
};

export default MemoHead;
