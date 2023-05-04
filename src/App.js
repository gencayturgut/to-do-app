import React, { useState, useEffect } from "react";
import Components from "./Components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const saveTodoHandler = (enteredTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, enteredTodo];
      return updatedTodos;
    });
  };
  

  return (
    <div>
      <h1>To-Do-App</h1>
      <Components onSaveTodo={saveTodoHandler} todos={todos} />
    </div>
  );
}

export default App;
