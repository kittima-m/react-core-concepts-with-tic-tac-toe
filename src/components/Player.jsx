import { useState } from "react";

export default function Player({ name, symbol, isActive, onSaveNewName }) {
  const [currentName, updateCurrentName] = useState(name);
  const [isEdit, updateEditState] = useState(false);

  function handleEditState() {
    updateEditState((editing) => !editing);

    if (isEdit) {
      onSaveNewName(symbol, currentName);
    }
  }

  function handleNameChange(event) {
    updateCurrentName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input value={currentName} onChange={handleNameChange} />
        ) : (
          <span className="player-name">{currentName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditState}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
