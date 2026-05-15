import React from "react";
import resData from "../utils/Data";
import ResCard from "./ResCard";
import { useState } from "react";


const Body = () => {
 
    const [dummyRes,setDummyRes]=useState(resData)
    function topRes(){
        const filterRes=dummyRes.filter((res)=> res.info.avgRating>=4.5)
        console.log(dummyRes)
        console.log(filterRes)
        setDummyRes(filterRes)
    }
  return (
    <div className="container">
    <button className="filter-btn" onClick={topRes}>Top Rated Restaurent</button>
    <button className="filter-btn">{a}</button>
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