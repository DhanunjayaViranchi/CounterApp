import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/message/${count}`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, [count]);

  return (
    <div>
      <h1>Counter App</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <hr />

      <h2>Message from Backend:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;