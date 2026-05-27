import React from 'react';
import axios from "axios"
import {useState, useEffect} from "react";
import './home.css';

export default function Home() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => res.data).then(d=>setData(d));
        console.log(data);
    },[data]);
    return(
        <div>
            {
                data.map((obj)=>{
                    return(
                        <div className="home">
                            <h1>{obj.title}</h1>
                            <p>{obj.body}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
