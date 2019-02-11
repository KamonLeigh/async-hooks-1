import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import User from "./User";


function App() {
  
  return (
    <div className="App">
    <h1>useFetch Playground</h1>
      <Counter />
      <User/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
