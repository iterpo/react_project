import { useState, useEffect } from 'react';
import axios from 'axios';


export function get5courses(){
    const  url = 'http://localhost:3001/courses';
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    return data;
}


    export async function getResponse(id) {
        const response = await fetch(
            `localhost:3001/courses/${id}`,
            {
                method: 'GET',
            }
        );
        const data = await response.json(); // Extracting data as a JSON Object from the response
        return data;
    }


export function  getCourse(id){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/courses/${id}`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    return data;
}

export function getAllStats(){
    const  url = 'http://localhost:3001/stats';
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
    var amounts = data.map(item => item.amount);
  return amounts;
}

