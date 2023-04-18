import React from "react";
import { Modal } from "react-bootstrap";

function ModalBase({ show, close, title, children }) {
  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
ModalBase.defaultProps = {
  title: "Titulo por defecto",
};

export default ModalBase;
