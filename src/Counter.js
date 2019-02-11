import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useFetch } from "./useHooks/hooks";
import Title from "./styles/TitleStyle";
import Load from "./styles/LoadingStyle";



const User = styled.p`
    font-size:20px;
    color: #2E4053;
`;

const Count = styled.p`
    font-size: 22px;
    color: #263238;
`;


const Button = styled.button`
     cursor: pointer;
     border: 2px solid #1976D2;
     border-radius: 3px;
     padding: 4.5px 14px;
     font-size: 17px;
     margin: 14px;
     opacity:1;

     background-color: ${ ({ primary }) => primary ? "#1976d2" : "#fff"};
     color: ${ ({ primary })=> primary ? "#fff" : "#1976d2"};
    
     &:disabled{
         cursor: not-allowed;
         opacity:0.4;
     }
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
    <div>
    <Title>Counter:</Title>
        <br/>
      <Count>{count}</Count>
      <div className="count">
        <Button
            primary
            onClick={incrementCounter}
            >
          Increment +
        </Button>
        <Button
          disabled={count <= 0}
          onClick={decrementCounter}
        >
          Decrement -
        </Button>
      </div>
      <Title>User information: </Title>
      {load ? 
        <Load>Loading...</Load> :
         <User> {value.results[0].name.first} {value.results[0].name.last}</User>}
    </div>
  );
}

export default Counter;