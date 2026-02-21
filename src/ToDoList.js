import { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [dragIndex, setDragIndex] = useState(null);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks.splice(dragIndex, 1)[0];
    updatedTasks.splice(index, 0, draggedTask);
    setTasks(updatedTasks);
    setDragIndex(null);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter Task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            className={dragIndex === index ? "dragging" : ""}
          >
            <span
              onClick={() => toggleComplete(index)}
              className={task.completed ? "completed" : ""}
            >
              ☰ {task.text}
            </span>
            <button className="remove-btn" onClick={() => deleteTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;