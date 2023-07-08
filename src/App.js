import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { RestaurantDetailsPage } from "./Pages/RestaurantDetailsPage/RestaurantDetailsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/restaurant/:restaurantId"
          element={<RestaurantDetailsPage />}
        ></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
