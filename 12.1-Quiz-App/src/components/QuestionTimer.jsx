import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    // const interval = 
    console.log("SETTING INTERVAL");
    
    setInterval(() => {
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
