import React from "react";

function GameOver({winner}) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It&apos;s a drow!</p>}
        <p><button>Rematch!</button></p>
      </div>
    </>
  );
}

export default GameOver;
