import React from "react";
import {Link} from "react-router-dom";
import "./blog.css";
export default function Blog() {
    return(
        <div className="navbar">
            <div><h1>Blog</h1></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/send">Send</Link>
                </li>
                <li>
                    <Link to="/update">Update</Link>
                </li>
                <li>
                    <Link to="/delete">Delete</Link>
                </li>
            </ul>
        </div>
    );
}
