import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/MockData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurentMenu = () => {

    const {resId}=useParams()
    console.log(resId);
    

  const [menuItem, setMenuItem] = useState(null);
  const [dishes, setDishes] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    console.log(json.data);
    setMenuItem(json.data);
    setDishes(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    console.log(dishes)
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  if(menuItem===null){
    return (
        <Shimmer/>
    )
  }

  return (
    <div className="resMenu">
      <div className="res-info">
      <h1>{menuItem.cards[2].card.card.info.name}</h1>
      <h4>{menuItem.cards[2].card.card.info.cuisines.join(" ")}</h4>
      </div>
      <div className="res-menu">
      <h2>Menu</h2>
      <ul>
      {
        dishes.map((dish,index)=>{
            return(
                <li key={index} >{dishes[index].card.info.name}</li>
            )
        })
      }
      </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
