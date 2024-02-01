import { CDN_URL } from "../../utils/constant";

const styleCard = {
    backgroundColor:'#f0f0f0'
}
const RestaurantCard =(props)=>{
    const {name ,cloudinaryImageId, costForTwo, cuisines , avgRating , sla } = props.resData.info;
    return(
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            alt="res-logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{costForTwo}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating}⭐</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard ; 