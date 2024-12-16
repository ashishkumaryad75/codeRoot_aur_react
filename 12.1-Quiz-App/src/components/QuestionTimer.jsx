import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState();

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </>
  );
}

export default QuestionTimer;
