import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }

    return () => {
      if (modal) modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
