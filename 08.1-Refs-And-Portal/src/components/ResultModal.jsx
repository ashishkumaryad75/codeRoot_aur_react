import React from "react";

function ResultModal({ result, targetTime }) {
  return (
    <dialog children="result-modal" open>
      <h2>{result}</h2>
      <p>
        The Target Time Was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X second left.</strong>
      </p>{" "}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
