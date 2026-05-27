import React, { useState } from "react";
import './send.css';
import axios from "axios";
function Send(){
    const [userid,setUserid] = useState("");
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    function sendPost(e){
        e.preventDefault();
        const formdata = {"userID": userid, "title": title, "body": body};
        axios.post("https://jsonplaceholder.typicode.com/posts", formdata).then(res=>alert(res.status));
    }
    return(
        <div className="send">
            <h2>Send a blog Post</h2>
            <form onSubmit={sendPost}>
                <input type="text" value={userid} onChange={(e)=>setUserid(e.target.value)} placeholder="User ID"/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body" rows={5}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default Send;