import React, { useEffect } from "react";
import { SWIGGY_URL } from "../utils/MockData";
import ResCard from "./ResCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useResData from "../utils/useResData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const dummyRes=useResData()
  const status=useOnlineStatus()

  function topRes() {
    const filterRes = dummyRes.filter((res) => res.info.avgRating >= 4.5);
    console.log(dummyRes);
    console.log(filterRes);
  }

if(status===false){
  return (
    <h1>You are Offline</h1>
  )
}

  if (dummyRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container">
      <button className="filter-btn" onClick={topRes}>
        Top Rated Restaurent
      </button>

      <div className="body">
        {dummyRes.map((res, id) => {
          console.log(res);
          return (
            <Link to={"/menu/" + res.info.id} key={res.info.id}>
              {" "}
              <ResCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
