import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MemoModal = ({ show, handleClose, setMemo }: {
    show: boolean;
    handleClose: () => void;
    setMemo: (data: any) => void;
}) => {
  const [title, setTitle] = useState("");
  const [memo, setMemoText] = useState("");

  const submitMemo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      title: title,
      memo: memo,
    };
    axios
      .post("http://localhost:8080/memo", data)
      .then((result) => {
        setMemo(result.data);
      })
      .catch((error) => console.log(error.response.data));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Memo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitMemo}>
          <Form.Group controlId="memoTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a title for your memo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group controlId="memoText">
            <Form.Label>Memo</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your memo here"
              rows={3}
              value={memo}
              onChange={(e) => setMemoText(e.target.value)}
              required
            />
          </Form.Group>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Memo
            </button>
            <button
              onClick={handleClose}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MemoModal;
