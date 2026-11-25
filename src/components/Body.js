import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../../utils/mockData";
import { useState } from "react";

const Body =() =>{
    // const arr = useState(restaurantsList);
    // const restList = arr[0];
    // const setrestList = arr[1];
    // It can be simplify as below using array destructuring
    const [restList, setrestList] = useState(restaurantsList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    setrestList(restaurantsList.filter((rest)=>rest.rating>4.0));
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">
                {restList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurantInfo={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;