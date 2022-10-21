import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export function Like(){
    const [likes,setLikes]=useState(0);

    const handleLike=()=>{
        setLikes((prev)=>prev+1)
    }
    return(
        <>
            <h1 className="noOfLikes"><FaHeart className="like_btn" onClick={handleLike} />{likes}</h1>
        </>
    )
}