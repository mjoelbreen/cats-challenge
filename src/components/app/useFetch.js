import  { useState, useEffect } from 'react'

const useFetch = () => {
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/cats')
            .then(response => {
                if(!response.ok) {
                    throw Error('could not fetch');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, []);

    return { data, isPending, error}

}

export default useFetch