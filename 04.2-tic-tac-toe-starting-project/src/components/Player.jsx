import React, { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleName(e) {
    // TODO: Handle The input
    console.log(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={name}
            onChange={(e) => handleName(e)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
