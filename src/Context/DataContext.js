import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { restaurantsData } from "../Data/restaurants";
import { cuisineData } from "../Data/cuisiones";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionTypes.INITIAL_SET_RESTAURANTS,
      payload: { restaurants: restaurantsData },
    });
    dispatch({
      type: ActionTypes.INITIAL_SET_CUISINES,
      payload: { cuisines: cuisineData },
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
