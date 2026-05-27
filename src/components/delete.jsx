import React, { useState } from "react";
import './send.css';
import axios from "axios";
function Delete(){
    const [id,setId] = useState('');
    function deletePost(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + id).then(res=>alert(res.status));
    }
    return(
        <div className="send delete">
            <h2>Delete a blog Post</h2>
            <form onSubmit={deletePost}>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="ID"/>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}
export default Delete;