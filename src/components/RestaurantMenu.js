import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=691733&catalog_qa=undefined&submitAction=ENTER')
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