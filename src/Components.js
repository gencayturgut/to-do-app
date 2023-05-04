import React, { useState, useEffect } from "react";
import AddingOperation from "./Add-Remove Operation";
import "./Components.css";

function Components() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(savedTodos));
  }, []);

  const onSaveTodo = (newTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const onDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    localStorage.setItem("todos", JSON.stringify( todos.filter((todo) => todo.id !== id)));
  };

  return (
    <div>
      <AddingOperation saveTodo={onSaveTodo} />
        <ol>
          {todos.map((todo) =>(
            <li key={todo.id}>
              <div className="task">
                <div className="task-name">{todo.name}</div>
                <div className="task-importance">{todo.importance}</div>
                <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ol>
    </div>
  );
}

export default Components;
