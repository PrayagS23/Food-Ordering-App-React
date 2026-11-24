import { react } from "react";
import { createRoot } from "react-dom/client";

const Heading =() =>{
    return(
        <div id="container">
            <h1>Hello, World!</h1>
        </div>
    )
}

const restaurants=[
  {
    "id": "rest-001",
    "name": "Spice Garden",
    "cuisines": ["North Indian", "Biryani"],
    "rating": 4.4,
    "deliveryTime": "25-30 mins",
    "priceForTwo": 400,
    "area": "Indiranagar",
    "image": "https://dummyimage.com/600x400/eee/333.png&text=Spice+Garden"
  },
  {
    "id": "rest-002",
    "name": "Dosa Corner",
    "cuisines": ["South Indian", "Breakfast"],
    "rating": 4.2,
    "deliveryTime": "20-25 mins",
    "priceForTwo": 250,
    "area": "Koramangala",
    "image": "https://dummyimage.com/600x400/eee/333.png&text=Dosa+Corner"
  },
  {
    "id": "rest-003",
    "name": "Wok This Way",
    "cuisines": ["Chinese", "Asian"],
    "rating": 4.1,
    "deliveryTime": "30-35 mins",
    "priceForTwo": 500,
    "area": "HSR Layout",
    "image": "https://dummyimage.com/600x400/eee/333.png&text=Wok+This+Way"
  },
  {
    "id": "rest-004",
    "name": "Burger Barn",
    "cuisines": ["Burgers", "Fast Food"],
    "rating": 4.3,
    "deliveryTime": "20-30 mins",
    "priceForTwo": 350,
    "area": "Jayanagar",
    "image": "https://dummyimage.com/600x400/eee/333.png&text=Burger+Barn"
  },
  {
    "id": "rest-005",
    "name": "Green Bowl",
    "cuisines": ["Healthy Food", "Salads"],
    "rating": 4.5,
    "deliveryTime": "25-35 mins",
    "priceForTwo": 450,
    "area": "Whitefield",
    "image": "https://dummyimage.com/600x400/eee/333.png&text=Green+Bowl"
  }
]

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/236x/4e/ce/a8/4ecea8602f117a646535655f13e295c9.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const RestaurantCard =({ restaurantInfo })=>{
    console.log(restaurantInfo);
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

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header></Header>
            <Body></Body>
            //Footer
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
