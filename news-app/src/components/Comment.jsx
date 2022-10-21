import React,{useState} from "react";
import { BiComment } from "react-icons/bi";
import "./Comment.css"

export function Comment(){
    const [inputComment,setInputComment]=useState("");
    const [comments,setComments]=useState([]);

    const handleClick=()=>{
        setComments([...comments,inputComment]);
        console.log(inputComment)
    }

    return(
        <>
        <div>
            <input type="text" placeholder="Comment here.." value={inputComment} onChange={(e)=>{setInputComment(e.target.value)}} className="commentInput" />
            <button onClick={handleClick} className="comment_btn"><BiComment /></button>
        </div>
        {
            comments.map((comment)=>{
               return <p className="commentText">{comment}</p>
            })
        }
        </>
    )
}