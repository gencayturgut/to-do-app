import React, { useState, useEffect } from "react";
import "./addremove.css";

function AddingOperation(props) {
  const deleteBool = false;
  const [taskName, setTaskName] = useState("");
  const [importance, setImportance] = useState("");
  const [id, setId] = useState(() => {
    const storedId = localStorage.getItem("id");
    return storedId ? parseInt(storedId) : 1;
  });

  useEffect(() => {
    localStorage.setItem("id", id);
  }, [id]);

  const taskHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: id,
      name: taskName,
      importance: importance,
      deleteBool: deleteBool,
    };
    if (
      newTask.name.trim().length === 0 ||
      newTask.importance.trim().length === 0
    ) {
      return;
    }
    setId(id + 1);
    props.saveTodo(newTask);
    setTaskName("");
    setImportance("");
  };

  const taskNameHandler = (event) => {
    setTaskName(event.target.value);
  };

  const importanceHandler = (event) => {
    setImportance(event.target.value);
  };

  return (
    <form onSubmit={taskHandler}>
      <input
        type="text"
        value={taskName}
        onChange={taskNameHandler}
        placeholder="Enter a task"
      />
      <select value={importance} onChange={importanceHandler}>
        <option value="">Select importance</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddingOperation;
