import React,{useState} from "react";
import "./Keyboard.css"
import { BsArrowLeft } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

export function Keyboard(){
    let keys_row1=["Q","W","E","R","T","Y","U","I","O","P"];
    let keys_row2=["A","S","D","F","G","H","J","K","L"];
    let keys_row3=["Z","X","C","V","B","N","M"];

    const [letter,setLetter]=useState("");
    console.log(letter)

    const [capslock,setCapsLock]=useState(true);

    return(
        <>
            <div className="container">
                <textarea name="" id="" cols="30" rows="10" value={letter}></textarea>
                <div>
                    {
                        keys_row1.map((key,index)=>{
                            return <button value={capslock?key.toUpperCase():key.toLowerCase()} onClick={(e)=>{setLetter(letter + e.target.value)}}>{capslock?key.toUpperCase():key.toLowerCase()}</button>
                        })
                    }
                </div>
                <div>
                    {
                        keys_row2.map((key,index)=>{
                            return <button value={capslock?key.toUpperCase():key.toLowerCase()} onClick={(e)=>{setLetter(letter+e.target.value)}}>{capslock?key.toUpperCase():key.toLowerCase()}</button>
                        })
                    }
                </div>
                <div>
                    {
                        keys_row3.map((key,index)=>{
                            return <button value={capslock?key.toUpperCase():key.toLowerCase()} onClick={(e)=>{setLetter(letter+e.target.value)}}>{capslock?key.toUpperCase():key.toLowerCase()}</button>
                        })
                    }
                </div>
                <div>
                    <button className="capslock_btn" onClick={(e)=>{capslock?setCapsLock(false):setCapsLock(true)}}>CAPSLOCK</button>

                    <button value={" "} className="space_btn" onClick={(e)=>{setLetter(letter + e.target.value)}}><BsDashLg /></button>

                    <button className="del_btn" onClick={()=>{setLetter(letter.slice(0,-1))}}><BsArrowLeft/></button>
                </div>
            </div>
        </>
    )
}