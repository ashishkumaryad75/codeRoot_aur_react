import React, { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required/> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing?"Edit":"Save"}</button>
    </li>
  );
}

export default Player;
