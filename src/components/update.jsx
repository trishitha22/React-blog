import React, { useState } from "react";
import './send.css';
import axios from "axios";
function Update(){
    const [userid,setUserid] = useState("");
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [id,setId] = useState('');
    function updatePost(e){
        e.preventDefault();
        const formdata = {"userID": userid, "title": title, "body": body};
        axios.put("https://jsonplaceholder.typicode.com/posts/" + id, formdata).then(res=>alert(res.status));
    }
    return(
        <div className="send update">
            <h2>Update a blog Post</h2>
            <form onSubmit={updatePost}>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="ID"/>
                <input type="text" value={userid} onChange={(e)=>setUserid(e.target.value)} placeholder="User ID"/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body" rows={5}/>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
export default Update;