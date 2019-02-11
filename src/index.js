import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Counter from "./Counter";
import Quote from "./Quote";
import AppStyle from "./styles/AppStyle";


const MainTitle = styled.h1`
  font-size: 45px;
  letter-spacing:1.5px;
  border-bottom: 2px #F44336 solid;
  display:inline-block;
  padding-bottom: 5px;
`;



function App() {
  
  return (
    <AppStyle>
    <MainTitle>useFetch Playground</MainTitle>
      <Counter />
      <Quote/>
    </AppStyle>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
