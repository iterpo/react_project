import { useState, useEffect } from 'react';
import axios from 'axios';


export function get5courses(){
    const  url = 'http://localhost:3001/courses';
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data.slice(0, 5));
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    return data;
}