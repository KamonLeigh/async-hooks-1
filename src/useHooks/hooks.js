import {useState, useEffect } from 'react';


export function useFetch(url, reload = []) {
    const [value, setValue] = useState();
    const [load, setLoad] = useState(true);
    const [error, setError] = useState();

    async function fetchData() {
        try {

            const res = await fetch(url);
            const data = await res.json();

            setValue(data);
            setLoad(false);

        } catch (e) {
            setError(e)
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, reload);

    return {
        value,
        load,
        error
    }


}

