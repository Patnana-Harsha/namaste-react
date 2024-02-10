import {useContext} from "react";
import UserContext from "../utils/UserContext.js";


const ResCard = (props) => {
    const {resData} = props;

const {loggedInUser} = useContext(UserContext)
    const {cloudinaryImageId,name,cuisines,avgRating} = resData;
    const imgLink = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    
    return (
        <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <img className="h-[250px]" src= {imgLink + cloudinaryImageId}  />
            <h3>{name}</h3>          
            <p className="overflow-hidden mt-1 text-xs">{cuisines.join(",")}</p>
            <h4 className="mt-2">Rating:{avgRating}</h4>
            <h4 className="mt-2">Rating:{avgRating}</h4>
            <h4 className="mt-2">User : {loggedInUser}</h4>
            
        </div>

    )
};

//Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )

    }
}



export default ResCard ;