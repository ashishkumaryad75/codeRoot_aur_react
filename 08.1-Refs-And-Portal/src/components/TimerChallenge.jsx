import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      if (dialog.current) {
        dialog.current.open();  // Call the open method on ResultModal via ref
      } else {
        console.log("Modal ref is undefined when trying to open.");
      }
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }
  return (
    <>
      {timerExpired && (
        <ResultModal result="lost" ref={dialog} targetTime={targetTime} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is Running...." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
