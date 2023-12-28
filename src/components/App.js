import React, { useState ,useEffect } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState({ id:"", item: "" });
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items]);

function handleChange(event) {
    const newValue = {
      id: Date.now(),
      item: event.target.value
    };
    setTodo(newValue)
  }

  function handleClick() {
    if (todo.item.trim() !== "") {
      setItems((previousItems) => {
        return [...previousItems, todo];
      });
      setTodo({ id: Date.now(), item: "" });
    }
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
