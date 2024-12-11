import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(1 - remainingTime / (targetTime * 1000)) * 100;

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

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Score {score}</h2>}
      <p>
        The Target Time Was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with{" "}
        <strong>{formattedRemainingTime}s left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
