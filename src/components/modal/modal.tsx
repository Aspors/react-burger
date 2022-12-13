import React, { memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./modal-styles.module.css";
import { TModal } from "./modal.types";

const Modal = memo<TModal>(
  ({ children, handleShowModal, header = null }): React.ReactPortal | null => {
    const modalRoot = document.getElementById("modal-root");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.key === "Escape" && handleShowModal();
    };

    const modalOverlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      modalOverlayRef?.current?.focus();
    }, []);

    if (modalRoot === null) {
      return null;
    }
    return createPortal(
      <div
        onClick={handleShowModal}
        tabIndex={0}
        ref={modalOverlayRef}
        onKeyDown={(e) => handleKeyPress(e)}
        className={modalStyles.modal__overlay}
      >
        <div onClick={(e) => e.stopPropagation()} className={modalStyles.modal}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="modal__header"
          >
            <h2 className="text text_type_main-large">{header ?? null}</h2>
            <i
              onClick={handleShowModal}
              className={modalStyles["modal__close-icon"]}
            >
              &times;
            </i>
          </div>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
);

export default Modal;
