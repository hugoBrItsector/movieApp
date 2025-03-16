import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface AddVideoProps {
  showModal: boolean;
  closeModal: () => void;
  handleAddVideoStore: (name: string, link: string) => void;
}

export const AddVideo: React.FC<AddVideoProps> = ({
  showModal,
  closeModal,
  handleAddVideoStore,
}) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleOnChangeName = (nameInput: string) => {
    setName(nameInput);
  };

  const handleOnChangeLink = (linkInput: string) => {
    setLink(linkInput);
  };

  const handleSubmit = () => {
    handleAddVideoStore(name, link);
    closeModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name">Nome do filme: </label>
          <input
            type="text"
            onChange={(event) => handleOnChangeName(event.target.value)}
          />
          <br />
          <label htmlFor="link"> Link do filme: </label>
          <input
            type="text"
            onChange={(event) => handleOnChangeLink(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Video
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
