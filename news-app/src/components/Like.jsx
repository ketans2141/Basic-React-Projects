import React from "react";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";

export function Like(){
    const [likes,setLikes]=useState(0);

    const handleLike=()=>{
        setLikes((prev)=>prev+1)
    }
    return(
        <>
            <h1 className="noOfLikes"><BiHeart className="like_btn" onClick={handleLike} />{likes}</h1>
        </>
    )
}