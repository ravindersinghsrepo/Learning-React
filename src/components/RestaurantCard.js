import { CDN_URL } from "../../utils/constant";

const styleCard = {
    backgroundColor:'#f0f0f0'
}
const RestaurantCard =(props)=>{
    const {name ,cloudinaryImageId, costForTwo, cuisines , avgRating , sla } = props.resData.info;

    return(
        <div className="res-card m-4 p-4 w-[200px] h-[300px] rounded-md bg-gray-100 hover:bg-gray-200">
            <img 
            className="res-logo rounded-md h-[100px]"
            alt="res-logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold p-4 text-sm">{name}</h3>
            <h3 className="text-sm">{costForTwo}</h3>
            <h3 className="text-sm">{cuisines.join(', ')}</h3>
            <h4>{avgRating}⭐</h4>
            <h4 className="text-sm">{sla.deliveryTime} mins</h4>
        </div>
    )
}

// higher order component 
// takes i/P -> as a component and return a component which just a piece of jsx 

export const withVegLabel=(RestaurantCard)=>{
    console.log('With Veg label rendered')
    return (props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white mx-2 px-2 py-1 rounded-md text-sm">
                Veg
            </label>
            <RestaurantCard {...props}/>
        </div>
        )
    }
}

export default RestaurantCard ; 