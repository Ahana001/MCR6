import "./HomePage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { CuisineList } from "../../Components/CuisineList/CuisineList";
import { RestaurantList } from "../../Components/RestaurantList/RestaurantList";

export function HomePage() {
  const { state } = useContext(DataContext);
  return (
    <div className="HomePageContainer">
      <h1>Food Ordering App</h1>
      <CuisineList />
      {state.currentCuisineId && <RestaurantList />}
    </div>
  );
}
