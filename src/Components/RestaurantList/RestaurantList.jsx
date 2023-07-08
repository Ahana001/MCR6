import "./RestaurantList.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

export function RestaurantList() {
  const { state } = useContext(DataContext);
  const filteredRestaurants = state.restaurants.filter(
    (restaurant) => restaurant.cuisine_id === state.currentCuisineId
  );
  return (
    <div className="RestaurantListContainer">
      {filteredRestaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
      })}
    </div>
  );
}
