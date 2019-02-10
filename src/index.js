import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  async function fetchData() {
    try {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();

      const last = data.results[0].name.last;
      const first = data.results[0].name.first;

      setUser({ first, last });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(
    () => {
      fetchData();
    },
    [count]
  );

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      {count}
      <div className="count">
        <button className="btn btn__increment" onClick={incrementCounter}>
          Increment +
        </button>
        <button
          className="btn btn__decrement"
          disabled={count <= 0}
          onClick={decrementCounter}
        >
          Decrement -
        </button>
      </div>
      <p>User information: </p>
      <p>
        {user.first} {user.last}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
