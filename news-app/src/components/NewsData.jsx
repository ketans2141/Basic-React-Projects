import React,{useEffect} from "react";
import { useState } from "react";
import axios from "axios"
import "./NewsData.css"
import {Link} from "react-router-dom"
import { BiHeart } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { Like } from "./Like";
import { Comment } from "./Comment";
import Spinner from 'react-bootstrap/Spinner';

export function NewsData(){
    const [newsData,setNewsData]=useState([])
    const [search,setSearch] =useState("");
    const [filterSearchNews,setFilterSearchNews]=useState([]);
    // const [inputComment,setInputComment]=useState("");
    // const [comments,setComments]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        async function getData(){
            setLoading(true)
            const response = await axios.get(`
            https://newsapi.org/v2/everything?q=bitcoin&apiKey=c1e17df229174b72a2a926b15db10f41`)
            setNewsData(response.data.articles);
            console.log(response.data.articles)
            setLoading(false);
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
  
    return(
        <>
            <div className="inputSection">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="search_input"/>
                <button className="search_btn">Search</button>
            </div>

                <div className="mainContainer">
                    {loading?(
                    <div className="loadingSection">
                    <span className="loading">Loading...</span>
                    <Spinner animation="border" variant="primary" className="spinner" />
                    </div>):
                    (
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
                                            <h3 className="authorName">{item.author}</h3>
                                            <h6 className="publish_time">{item.publishedAt}</h6>
                                            <a href={item.url} className="readmore_btn">Read More...</a>
                                            <p className="content">{item.description}</p>
                                        </div>
                                        <Like/>
                                        {/* <BiComment className="comment_btn"/> */}
                                        {/* <input type="text" placeholder="Comment here.." value={inputComment} onChange={(e)=>{setInputComment(e.target.value)}} className="commentInput"/> */}
                                        <BiTrash onClick={()=>deletePost(item.url)} className="del_btn"/>
                                        <Comment/>
                                    </div>  
                                </div>
                                </>
                            )
                    }))   
                    }
                    
                </div>
        </>
    )
}