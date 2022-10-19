import React,{useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import "./Home.css"
// import { Link } from "react-router-dom";
export function Home(){
    const [newsData,setNewsData]=useState([])
    // const [search,setSearch] =useState("");
    const [filterSearchNews,setFilterSearchNews]=useState([]);
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`
            https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c1e17df229174b72a2a926b15db10f41`)
            setNewsData(response.data.articles);
            console.log(response.data.articles)
            setFilterSearchNews([newsData,...response.data.articles])
        }
        getData();
    },[])

  
    return(
        <>
                <div className="main_Container">
                    {
                        filterSearchNews.map((item,index)=>{
                            return(
                                <>
                                <div className="">
                                    <div className="container_">
                                        <h1>{item.title}</h1>
                                        <hr className="rule"/>
                                        <div className="contentDiv">
                                        <img src={item.urlToImage} alt="" className="news_image"/>
                                        <p className="_description">{item.description}</p>
                                        </div>
                                        <hr className="rule"/>
                                        <div className="lower_cont">
                                            <h3>{item.author}</h3>
                                            <h6 className="publish_time">{item.publishedAt}</h6>
                                            <a href={item.url} className="readmore_btn_">Read More...</a>
                                        </div>
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