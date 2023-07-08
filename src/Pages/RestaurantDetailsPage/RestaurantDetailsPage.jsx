import "./RestaurantDetailsPage.css";

import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { ReviewList } from "../../Components/ReviewList/ReviewList";
import { AddReviewModal } from "../../Components/AddReviewModal/AddReviewModal";
import { DisplayContext } from "../../Context/DisplayContext";
import { BiArrowBack } from "react-icons/bi";

export function RestaurantDetailsPage() {
  const { restaurantId } = useParams();
  const { state } = useContext(DataContext);
  const { setIsReviewModalVisible } = useContext(DisplayContext);

  const filteredRestaurant = state?.restaurants?.find(
    (restaurant) => restaurant?.id === Number(restaurantId)
  );
  if (!filteredRestaurant) {
    return null;
  }
  const restaurantDishes = filteredRestaurant.menu.map((menuItem) => {
    return menuItem.name;
  });
  return (
    <div className="RestaurantDetailsPage">
      <Link to="/">
        <BiArrowBack className="BackButton" />
      </Link>
      <div className="RestaurantDetailsHeader">
        <div className="RestaurantDetails">
          <div className="RestaurantName">{filteredRestaurant.name}</div>
          <div className="RestaurantDishes">{restaurantDishes.join(",")}</div>
          <div className="RestaurantAddress">{filteredRestaurant.address}</div>
          <div className="RestaurantAverageRating">
            Average Rating: {filteredRestaurant.averageRating}
          </div>
        </div>
        <button onClick={() => setIsReviewModalVisible(true)}>
          Add Review
        </button>
      </div>
      <div className="HorizontalLine"></div>
      <div className="ReviewContainer">
        <div className="RestaurantDetailsReviewHeader">Reviews</div>
        <ReviewList reviewList={filteredRestaurant.ratings} />
      </div>
      <AddReviewModal />
    </div>
  );
}
