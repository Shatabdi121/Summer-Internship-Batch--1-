import React, { useEffect } from "react";
import { SWIGGY_URL } from "../utils/MockData";
import ResCard from "./ResCard";
import { useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
 
    const [dummyRes,setDummyRes]=useState([])
    useEffect(()=>{
      fetchData()
    })
    
    //data fetch from API
    const fetchData = async() =>{
       const a= await fetch(SWIGGY_URL);
       const resData= await a.json();
       console.log(resData)
       setDummyRes(resData?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
1    }


    function topRes(){
        const filterRes=dummyRes.filter((res)=> res.info.avgRating>=4.5)
        console.log(dummyRes)
        console.log(filterRes)
        setDummyRes(filterRes)
    }

    if(dummyRes.length===0){
        return <Shimmer />
    }
  return (
    <div className="container">
    <button className="filter-btn" onClick={topRes}>Top Rated Restaurent</button>
      
<div className="body">
      {
        dummyRes.map((res,id)=>{
            return(
                <ResCard resData={res} key={id} />
            )
        })
      }
      </div>
    </div>
  );
};
export default Body;