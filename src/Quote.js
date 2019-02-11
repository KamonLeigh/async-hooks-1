import React from 'react';
import { useFetch } from './useHooks/hooks';
import styled from 'styled-components';
import Title from './styles/TitleStyle';
import Load from './styles/LoadingStyle';

const Quote = styled.p`
    text-align: center;
    font-size: 18px;
    margin-top: 50px;
    letter-spacing:1.15px; 
    color: #2E4053;
`;


function User(){

    const { value  , load }= useFetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");

    return (<Quote>
                <Title>Quote Generator</Title>
                {load? <Load>Loading...</Load> : <p>{value}</p>}
        </Quote>
    )
}




export default User;