import { useState } from 'react';



function App() {
  const a = 5;
  const [count, setCount] = useState(0);
  const students = ["Anne","Bob","Charlie"];

  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const isLoggedIn = true;
  const message = isLoggedIn ? "Welcome Back!" : "Please log in.";

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>a is equal to {a}</p>
      <h2>{a > 5 ? "Welcome" : "Please Login."}</h2>
      <p>{message}</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={() => {
        if (input.trim() === "") return;
        setTask([...task, input]);
        setInput("");
      }}>
        Add Task
      </button>
      <ul>
        {task.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;