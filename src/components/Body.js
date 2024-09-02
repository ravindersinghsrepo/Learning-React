import { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const[filteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchVal , setSearchVal] = useState("");
    
    
    const VegRestaurantCard = withVegLabel(RestaurantCard);

    // console.log('component rendered'); 

    useEffect(()=>{
        // console.log('useEffect called');
        fetchData();
    },[]); // call back function is called after the component is rendered .

    const fetchData = async()=>{
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData = await data.json();
        console.log(jsonData)
        // jsonData =  jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        jsonData = jsonData.data?.cards.filter((card)=>{
            return card.card.card.id=="restaurant_grid_listing"; 
        })
        jsonData = jsonData[0].card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(jsonData);
        setFilteredRestaurant(jsonData);

    }

    const filterRestaurant = (searchItem)=>{
        console.log(listOfRestaurant)
        console.log(listOfRestaurant.map(res=>console.log(res.info.name)))
        setFilteredRestaurant(listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchItem.toLowerCase())));
    }
   

    return listOfRestaurant?.length==0 ? 
        (
            <Shimmer/>
        )
        :
        (
        <div className="body">
            
            <div className="filter flex">
                <div className=" m-4 p-4">

                    <input type="text" 
                    className="border border-solid border-black"
                    value={searchVal}
                    onChange={(event)=>{
                        setSearchVal(event.target.value);
                    }} 
                    />

                    <button 
                    className="px-4 py-0.5 bg-green-100 m-4 rounded-md"
                    onClick={()=>{
                        console.log(searchVal)
                        filterRestaurant(searchVal);
                    }}>Search</button>

                <button className="px-4 py-0.5 bg-gray-200 rounded-md" onClick={() => {
                    filteredList = listOfRestaurant.filter(res => res.info.avgRating > 4)
                    setFilteredRestaurant(filteredList)
                }}>
                    Top Rated Restaurants
                </button>

                </div>

            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant , index)=>{
                        return(
                            <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                            
                            {/* If current Restaurant is veg then add a Veg label on it  */

                               (
                                restaurant.info.veg || restaurant.info.veg==true) ? 
                                <VegRestaurantCard resData={restaurant}/>
                            :
                            (   <RestaurantCard  resData={restaurant}/>
                            )
                            }
                            </Link>
                        )
                    }) 
                }
            </div>
        </div>
        )
}

export default Body;