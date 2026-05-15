import React from "react";//Default Export
import {resImageUrl} from "../utils/MockData"; //named Export

const ResCard = ({ resData }) => {
    console.log(resData.info.name);
  return (
    <div className="res-card">
      <img
        src={resImageUrl+resData.info.cloudinaryImageId}
        alt="res image"
        className="res-img"
      />
      <h4>{resData.info.name}</h4>
      <p>{resData.info.cuisines.join(", ")}</p>
      <p>{resData.info.avgRating}</p>
      <p>Delivery Time : {resData.info.sla.slaString}</p>
    </div>
  );
};
export default ResCard;