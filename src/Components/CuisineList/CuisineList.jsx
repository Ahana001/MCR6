import { useContext } from "react";
import "./CuisineList.css";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function CuisineList() {
  const { state, dispatch } = useContext(DataContext);
  function handleSelectCuision(e) {
    dispatch({
      type: ActionTypes.SET_CURRENT_CUISINES,
      payload: { cuisineId: e.target.value },
    });
  }
  return (
    <div className="CuisionListContainer">
      <h2>Select Your Cuisine : </h2>
      <div className="CuisionList">
        {state.cuisines.map(({ id, name }) => {
          return (
            <button key={id} onClick={handleSelectCuision} value={id}>
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
