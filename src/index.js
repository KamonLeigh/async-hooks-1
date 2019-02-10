import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function useFetch(url, reload = []){
    const [value, setValue ] = useState();
    const [load, setLoad ] = useState(true);

    async function fetchData(){
      try {

        const res = await fetch(url);
        const data = await res.json();
      
       setValue(data);
       setLoad(false);

      } catch(e){
        console.log(e);
      }
    }

    useEffect(() =>{
      fetchData();
    }, reload);

    return {value, load }


}





function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });


  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { value  , load } = useFetch("https://randomuser.me/api");
  
  
  

  

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
      {load ? 
        <p>Loading</p> :
         <p> {value.results[0].name.first} {value.results[0].name.last}</p>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
