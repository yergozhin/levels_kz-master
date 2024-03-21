import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React from "react";
import { ITodo } from "../api/main.interface";
import useSWR from 'swr';

const todoId = 1
//export default function Main(){
    /*const { isLoading, error, data } = useQuery(['todos', todoId], () =>
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(
            response => response.json()
            )
    )*/
    /*const { isLoading, error, data } = useQuery(/*
        ["todos", todoId], () =>
          axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1')
          
           {
            queryKey: [todoId],
            queryFn: async () => {
             const res = await Axios.get<ITodo[]>(/*"https://jsonplaceholder.typicode.com/todos/1""https://onelab-levels-api.vercel.app/services/companies.service")
                return res.data;
            },
        }
    );*/
    const postData = {
        email: 'yerzhan.yergozhin@gmail.com',
        password: '123456789'
      };
      
      // POST request options
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };
      
      // Make the POST request
      const fetcher = fetch('https://github.com/khanterr/onelab-levels-api/services/companies.service', requestOptions)
        .then(response => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the JSON response
          return response.json();
        })
        .then(data => {
          // Handle the data returned from the server
          console.log('Post request response:', data);
          return (
            <div>{data ? <h1>Todo: {data}</h1> : <h1>Data not found!</h1>}</div>
            )
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
        const Swr = () => {
            const {
              data//: countries,
              //error,
              //isValidating,
            } = useSWR('https://onelab-levels-api.vercel.app/api/companies', fetcher);
      //if (error) return 'An error has occurred: ' + error.message    
    return (
    <div>{data ? <h1>Todo: {data}</h1> : <h1>Data not found!</h1>}</div>
    )
}
export default Swr;
/*return (
    <div>{"data" ? <h1>Todo: {"data"}</h1> : <h1>Data not found!</h1>}</div>
    )
}*/