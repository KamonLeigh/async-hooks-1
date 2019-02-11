import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useFetch } from "./hooks";
import Title from "./styles/TitleStyle";
import Load from "./styles/LoadingStyle";
import "./styles.css";


const User = styled.p`
    font-size:20px;
    color: #2E4053;
`;

const Count = styled.p`
    font-size: 22px;
    color: #263238;
`;

function Counter() {
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
    <Title>Counter:</Title>
        <br/>
      <Count>{count}</Count>
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
      <Title>User information: </Title>
      {load ? 
        <Load>Loading...</Load> :
         <User> {value.results[0].name.first} {value.results[0].name.last}</User>}
    </div>
  );
}

export default Counter;