import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = {
      id: Date.now(),
      item: event.target.value,
    };
    setTodo(newValue);
  }

  function handleClick() {
    setItems((previousItems) => {
      return [...previousItems, todo];
    });
    setTodo("");
  }

  function handleDelete(id) {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todo.item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todo={todoItem}
              delete={() => handleDelete(todoItem.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
