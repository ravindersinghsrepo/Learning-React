import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () =>{

    // state variable -> super powerful variable 
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const[filteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchVal , setSearchVal] = useState("");
    
    // console.log('component rendered'); 

    useEffect(()=>{
        // console.log('useEffect called');
        fetchData();
    },[]); // call back function is called after the component is rendered .

    const fetchData = async()=>{
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData = await data.json();
        // console.log(jsonData)
        jsonData =  jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
            
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchVal}
                    onChange={(event)=>{
                        setSearchVal(event.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        console.log(searchVal)
                        filterRestaurant(searchVal);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    filteredList = listOfRestaurant.filter(res => res.info.avgRating > 4)
                    setFilteredRestaurant(filteredList)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant , index)=>{
                        return(
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                        )
                    })
                }
            </div>
        </div>
        )
}

export default Body;