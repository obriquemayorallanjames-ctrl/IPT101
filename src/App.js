import { useState } from 'react';



function App() {
  const a = 5;
  let message;
  const [count, setCount] = useState(0);
  const students = ["Anne","Bob","Charlie"];

  const [task, setTask] = useState([]);//store task
  const [input, setInput] = useState("");//store value
  const addTask = () => {
    if(input.trim() === "") return;
    setTask([...task, input]);
    setInput("")
  }


  const isLoggedIn = true;
  if(isLoggedIn)
      {
       message = "Welcome Back!"
      }
      else
      {
        message = "Please log in."
      }
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>a is equal to {a}</p>
      <h2>{a > 5 ? "Welcome" : "Please Login."}</h2>

      <p>Count: {count}</p>
      <button onClick = {() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick = {() => setCount(count - 1)}>
        Decrease
        </button>
        
      <button onClick = {() => setCount(0)}>
        Reset
      </button>

      <ul>
        {students.map((students, index) => (
          <li key={index}>{students}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;