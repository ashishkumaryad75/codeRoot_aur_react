import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function ProgressBar({timer}) {
  const [remianingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <progress value={remianingTime} max={timer} />
    </div>
  );
}

export default ProgressBar;
