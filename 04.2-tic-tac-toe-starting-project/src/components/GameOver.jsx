import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It&apos;s a drow!</p>}
        <p>
          <button onClick={onRestart}>Rematch!</button>
        </p>
      </div>
    </>
  );
}

export default GameOver;
