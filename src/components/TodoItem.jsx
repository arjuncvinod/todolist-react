import React, { useState } from "react";

function TodoItem(props) {
  const [strike, setStrike] = useState(false);

  function handleClick() {
    setStrike((previousValue) => !previousValue);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: strike ? "line-through" : "none" }}
    >
      {props.todo.item}
      <button className="delete-btn" onClick={() => props.delete(props.todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
