import { useEffect, useState } from "react"
import { SWIGGY_URL } from "./MockData"

const useResData = () =>{
    const [resInfo,setResInfo]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    //data fetch from API
    const fetchData = async() =>{
       const a= await fetch(SWIGGY_URL);
       const resData= await a.json();
       setResInfo(resData?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
1    }


    return resInfo
}
export default useResData;
