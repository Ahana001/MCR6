export const ActionTypes = {
  INITIAL_SET_RESTAURANTS: "INITIAL_SET_RESTAURANTS",
  INITIAL_SET_CUISINES: "INITIAL_SET_CUISINES",
  SET_CURRENT_CUISINES: "SET_CURRENT_CUISINES",
  ADD_REVIEW: "ADD_REVIEW",
};

export const initialState = {
  restaurants: [],
  cuisines: [],
  currentCuisineId: null,
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_RESTAURANTS: {
      result = {
        ...state,
        restaurants: action.payload.restaurants,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_CUISINES: {
      result = {
        ...state,
        cuisines: action.payload.cuisines,
      };
      break;
    }
    case ActionTypes.SET_CURRENT_CUISINES: {
      result = {
        ...state,
        currentCuisineId: Number(action.payload.cuisineId),
      };
      break;
    }
    case ActionTypes.ADD_REVIEW: {
      const updatedRestaurants = state.restaurants.map((restaurant) => {
        if (restaurant.id === action.payload.restaurantId) {
          const updatedRestaurant = {
            ...restaurant,
            ratings: [
              ...restaurant.ratings,
              {
                rating: Number(...action.payload.rating),
                comment: action.payload.comment,
                revName: "Ana",
                pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
              },
            ],
          };
          console.log("updatedRestaurant");
          console.log(updatedRestaurant);
          return updatedRestaurant;
        } else {
          return restaurant;
        }
      });
      result = {
        ...state,
        restaurants: updatedRestaurants,
      };
      break;
    }
  }
  return result;
}
