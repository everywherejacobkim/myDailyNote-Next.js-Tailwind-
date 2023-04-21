import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import classNames from "classnames";

interface Memo {
  title: string;
  memo: string[];
}

const MemoItem = () => {
  const [addedMemo, setAddedMemo] = useState<Memo[]>([]);

  useEffect(() => {
    axios
      .get<Memo[]>("http://localhost:8080/memo")
      .then((result) => {
        setAddedMemo(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-8 rounded-3xl">
      <Accordion defaultActiveKey="0">
        {addedMemo.map((memo, index) => {
          return (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header
                className={classNames(
                  "bg-fefae9 focus:border-green-700 focus:shadow-outline-green",
                  {
                    "bg-6d985c text-white font-bold": index === 0,
                  }
                )}
              >
                {memo.title}
              </Accordion.Header>
              <Accordion.Body className="bg-fffff1">{memo.memo}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default MemoItem;