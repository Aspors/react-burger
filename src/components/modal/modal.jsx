import React, { memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./modal-styles.module.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");
const Modal = memo(({ children, handleShowModal, header }) => {
  const handleKeyPress = (e) => {
    e.key === "Escape" && handleShowModal();
  };

  const modalOverlayRef = useRef();

  useEffect(() => {
    modalOverlayRef.current.focus();
  }, []);

  return createPortal(
    <div
      onClick={handleShowModal}
      tabIndex={0}
      ref={modalOverlayRef}
      onKeyDown={(e) => handleKeyPress(e)}
      className={modalStyles.modal__overlay}>
      <div onClick={(e) => e.stopPropagation()} className={modalStyles.modal}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="modal__header">
          <h2 className="text text_type_main-large">{header ?? null}</h2>
          <i
            onClick={handleShowModal}
            className={modalStyles["modal__close-icon"]}>
            &times;
          </i>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
});

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  header: PropTypes.string,
};

export default Modal;
