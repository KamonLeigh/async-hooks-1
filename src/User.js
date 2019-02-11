import React from 'react';
import { useFetch } from './hooks';



function User(){

    const data = useFetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");

    return (<div>
                <p>{data.value}</p>
        </div>
    )
}




export default User;