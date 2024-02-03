import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";

const RestaurantMenu=()=>{
    const [resInfo , setResInfo] = useState(null);
    const{resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API +resId)
        const jsonData = await data.json();
        setResInfo(jsonData.data)
        console.log(jsonData.data)
        console.log(resInfo)
    }
    if(resInfo===null){
        return <Shimmer/>
    }

    return(
        <div className="menu">
            <h1>{resInfo.cards[0].card?.card?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;