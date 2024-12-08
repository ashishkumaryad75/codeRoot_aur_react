import { useState, useRef } from "react";

export default function Player() {
  const inputPlayerName = useRef("");

  const [playerName, setPlayerName] = useState("");
  // const [submitted, setsubmitted] = useState(false);

  function handleChange(event) {
    // setsubmitted(false);
    // setPlayerName(event.target.value);
  }

  function handleClick() {
    // setsubmitted(true);
    setPlayerName(inputPlayerName.current.value);
    console.log(inputPlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? " unknown entity"}</h2>
      <p>
        <input
          ref={inputPlayerName}
          type="text"
          // onChange={handleChange}
          // value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
