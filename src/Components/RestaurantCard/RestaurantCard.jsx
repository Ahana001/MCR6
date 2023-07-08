import "./RestaurantCard.css";

import { MenuItemList } from "../MenuItemList/MenuItemList";
import { Link } from "react-router-dom";

export function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="RestaurantCardContainer"
    >
      <h2>Dishes By {restaurant.name}</h2>
      <MenuItemList
        menuItemList={restaurant.menu}
        description={restaurant.name}
      />
    </Link>
  );
}
