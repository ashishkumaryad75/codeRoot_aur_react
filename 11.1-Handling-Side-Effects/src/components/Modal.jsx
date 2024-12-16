import { forwardRef,useEffect,  useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({open, children }) {
  const dialog = useRef();
  useEffect(()=>{},[])

  

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
