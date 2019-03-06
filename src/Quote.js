import React from 'react';
import { useFetch } from './useHooks/hooks';
import styled from 'styled-components';
import Title from './styles/TitleStyle';
import LoadTag from './styles/LoadingStyle';
import ErrorTag from './styles/ErrorStyles';

const Quote = styled.p`
    text-align: center;
    font-size: 18px;
    margin-top: 50px;
    letter-spacing:1.15px; 
    color: #2E4053;
`;



function User(){

    const { value  , load, error  }= useFetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");

    return (<Quote>
                <Title>Quote Generator</Title>
             {error ? 
                <ErrorTag> Error with request please try again</ErrorTag> :load ?
                <LoadTag>Loading... </LoadTag> : <div> {value}</div>}
        </Quote>
    )
}




export default User;