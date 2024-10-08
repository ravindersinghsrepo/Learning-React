import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    // const [resInfo , setResInfo] = useState(null);
    const{resId} = useParams();
    let resInfo =  useRestaurantMenu(resId);
    
    console.log(resInfo);

    if(resInfo === null){
        return <Shimmer/>
    }
    const {name , cuisines , costForTwoMessage} = resInfo.cards[2].card?.card?.info;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
               {itemCards.map((item)=>{
                return(
                    <li key={item.card.info.name}>
                    {item.card.info.name} -{"Rs."}
                    {item.card.info.price /100 || item.card.info.defaultPrice/100}
                    </li>
                )
               })}
            </ul>
        </div>
    )
}
export default RestaurantMenu;