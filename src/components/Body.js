import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body =() =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurantInfo={restaurant} />
                ))}
            </div>

        </div>
    )
}

export default Body;