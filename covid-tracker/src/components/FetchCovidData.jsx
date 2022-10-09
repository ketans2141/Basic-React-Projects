import React,{useState,useEffect} from "react";
import "./FetchCovidData.css"
import axios from "axios"

export function FetchCovidData(){


    const [covidData,setCovidData]=useState([]);
    const [search,setSearch] =useState("");
    const [filterSearchData,setFilterSearchData]=useState([]);


    useEffect(()=>{
        async function getData(){
            const response = await axios.get("https://data.covid19india.org/data.json")
            setCovidData(response.data.statewise);
            console.log(response.data.statewise)
            setFilterSearchData([covidData,...response.data.statewise])
        }
        //  let res = axios.get("https://data.covid19india.org/data.json")
        //     .then(response=>{
        //         console.log(response.data.statewise);
        //         setCovidData(res.data.statewise)
        //     })
        getData();
    },[])

    useEffect(()=>{
        const filterSearch=covidData.filter((item)=>{
            if(item.state){
                return item.state.includes(search)
            }
        });
        
        setFilterSearchData(filterSearch)
    },[search]);

    return(
        <>
            <div className="container">
                <div className="main_heading">
                    <img src="https://ukneqas.org.uk/wp-content/uploads/2020/03/Covid-19.png" alt="" className="covid_png"/>
                    <h1 className="heading">India's Covid 19 Status</h1>
                </div>

                <div className="search_div">
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter your state..." className="search_input"/>
                    <button className="search_btn">Search</button>
                    <button className="active dark_light" onClick={(e)=>{
                        document.body.classList.toggle("active");
                        document.querySelector(".dark_light").classList.toggle("active");
                        
                    }}>Dark / Light</button>
                </div>
                    <div className="table_wrapper">
                        <table className="covid_data">
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Active</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Updated Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterSearchData.map((item,index)=>{
                                        return(
                                                    <>
                                                        <tr key={index}>
                                                            <td>{item.state}</td>
                                                            <td>{item.active}</td>
                                                            <td>{item.confirmed}</td>
                                                            <td>{item.recovered}</td>
                                                            <td className="death_col">{item.deaths}</td>
                                                            <td>{item.lastupdatedtime}</td>
                                                        </tr>
                                                       
                                                    </>
                                                )
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
               
            </div>
        </>
    )
}