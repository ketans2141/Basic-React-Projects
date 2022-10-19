import React,{useEffect} from "react";
import { useState } from "react";
import axios from "axios"
import "./NewsData.css"
import {Link} from "react-router-dom"
import { BiHeart } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { Like } from "./Like";


export function NewsData(){
    const [newsData,setNewsData]=useState([])
    const [search,setSearch] =useState("");
    const [filterSearchNews,setFilterSearchNews]=useState([]);
    const [like,setLike]=useState(0)
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`
            https://newsapi.org/v2/everything?q=bitcoin&apiKey=c1e17df229174b72a2a926b15db10f41`)
            setNewsData(response.data.articles);
            console.log(response.data.articles)
            setFilterSearchNews([newsData,...response.data.articles])
        }
        getData();
    },[])

    useEffect(()=>{
        const filterSearch=filterSearchNews.filter((post)=>{
            if(post.title){
                post=post.title.toLowerCase();
                return post.includes(search.toLowerCase())
            }
        });
        
        setFilterSearchNews(filterSearch)
    },[search]);

    const deletePost=(url)=>{
       let removeData=filterSearchNews.filter((item)=>item.url!==url);
       console.log(removeData)
       setFilterSearchNews(removeData);
    }

    // const handleLike=(url)=>{
    //     let likePost=filterSearchNews.filter((item)=>item.url!==url)
    //     setLike((prev)=>prev+1)
       
    // }
  
    return(
        <>
            <div className="inputSection">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="search_input"/>
                <button className="search_btn">Search</button>
            </div>

                <div className="mainContainer">
                    {
                        filterSearchNews.map((item)=>{
                            return(
                                <>
                                <div className="" >
                                    <div className="container" key={item.url}>
                                        <h1>{item.title}</h1>
                                        <hr />
                                        <img src={item.urlToImage} alt="" className="news_image"/>
                                        <hr />
                                        <div className="lower_cont">
                                            <h3>{item.author}</h3>
                                            <h6 className="publish_time">{item.publishedAt}</h6>
                                            <a href={item.url} className="readmore_btn">Read More...</a>
                                            <p className="content">{item.description}</p>
                                        </div>
                                        {/* <BiHeart className="like_btn" onClick={()=>handleLike(item.url)}/><p className="noOfLikes">{like}</p> */}
                                        <Like/>
                                        <BiComment className="comment_btn"/>
                                        <BiTrash onClick={()=>deletePost(item.url)} className="del_btn"/>
                                    </div>  
                                </div>
                                </>
                            )
                        })   
                    }
                    
                </div>
        </>
    )
}