import { useLocation } from "react-router-dom"
import {useState,useEffect} from "react"
import Comment from "./Comment.jsx"
function PostDetail()
{
    
    const { pathname } = useLocation();
  
    let idtext= pathname.substring(pathname.lastIndexOf("/")+1);
    const [post,setPost]=useState({});
    const [comments,setComment]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+idtext).then((response)=>response.json())
        .then((api)=>setPost(api));
        fetch("https://jsonplaceholder.typicode.com/posts/"+idtext+"/comments").then((response)=>response.json())
        .then((item)=>setComment(item));
    },[]);

    return (<>
    <h1 style={{textAlign:"center"}}>Részletező Oldal</h1>
        <div style={{border:"1px solid black", margin:"5px", padding:"10px"}} className="bg-light">
            <h2 style={{textAlign:"center"}}>{post.title}</h2>
            <p>{post.body}</p>
            <ol>
                {comments.map((comment)=><li key={comment.id} ><Comment data={comment}/></li>)}
            </ol>

        </div>
    </>)
}

export default PostDetail
