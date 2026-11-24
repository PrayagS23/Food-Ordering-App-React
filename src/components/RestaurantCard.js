const RestaurantCard =({ restaurantInfo })=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={restaurantInfo.image} className="res-logo" alt={restaurantInfo.name} />
            <h4>{restaurantInfo.name}</h4>
            <h5>{restaurantInfo.cuisines.join(", ")}</h5>
            <h5>{restaurantInfo.rating} Stars</h5>
            <h5>{restaurantInfo.deliveryTime}</h5>
            <h5>₹{restaurantInfo.priceForTwo} for two</h5>
        </div>
    )
}

export default RestaurantCard;