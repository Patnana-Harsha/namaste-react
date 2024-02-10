
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  // Whenever state variables PaymentRequestUpdateEvent, React tiggers a reconcilition CSSCounterStyleRule(re-renders the whole component)

  // console.log(listOfRestaurants);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    

    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    
  };
  

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return(<h1>You are offline, please check your internet connection</h1>)

  
  return listOfRestaurants.length === 0 ?(
  <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
      <div className="mt-5 px-4 py-0.5">
      <label>UserName </label>
        <input type='text' 
        className="border border-black p-1"
        value={loggedInUser}
        onChange={e=>setUserName(e.target.value)}/>
      </div>
        <button
          className="m-2 px-4 py-0.5 bg-black text-white rounded-2xl"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1.5 bg-green-100 m-4 rounded-2xl"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
              
            }}>
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-14 my-4 ">
        {filteredRestaurant?.map((restaurant) => (
          <Link 
          key={restaurant?.info.id} to = {"/restaurants/" + restaurant?.info.id}
          >
          {
            restaurant.info.promoted ? (<RestaurantCardPromoted  resData={restaurant?.info}/> 
            ) : (
              <RestaurantCard  resData={restaurant?.info} /> 
            )

          }
          
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;