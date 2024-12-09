import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      console.log("Opening the modal...");
      if (dialog.current) {
        dialog.current.showModal();
      } else {
        console.error("Dialog reference is undefined.");
      }
    },
    close() {
      console.log("Closing the modal...");
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal" open>
      <h2>{result}</h2>
      <p>
        The Target Time Was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
