import "./AddReviewModal.css";

import { RxCross1 } from "react-icons/rx";
import { DisplayContext } from "../../Context/DisplayContext";
import { useContext, useEffect, useState } from "react";
import { CustomizeToast } from "../../Utils/CustomizeToast";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useParams } from "react-router-dom";

export function AddReviewModal() {
  const { dispatch } = useContext(DataContext);
  const { isReviewModalVisible, setIsReviewModalVisible } =
    useContext(DisplayContext);

  const { restaurantId } = useParams();

  useEffect(() => {
    setIsReviewModalVisible(false);
  }, []);

  const [reviewData, setReviewData] = useState({
    rating: "SelectRating",
    comment: "",
  });

  return (
    <div
      className="ModalPortal"
      style={{ display: isReviewModalVisible ? "block" : "none" }}
    >
      <div className="ModalOverlay">
        <div className="ModalPortalContent">
          <div
            className="ModalPortalCloseButton"
            onClick={() => {
              setIsReviewModalVisible(() => false);
            }}
          >
            <RxCross1 />
          </div>
          <div className="ReviewInputContainer">
            <h2>Add Your Review</h2>
            <div className="HorizontalLine"></div>
            <div className="RatingContainer">
              <span>Rating:</span>
              <select
                className="RatingDropDown"
                defaultValue={reviewData.rating}
                onChange={(e) =>
                  setReviewData(() => ({
                    ...reviewData,
                    rating: Number(e.target.value),
                  }))
                }
              >
                {[1, 2, 3, 4, 5].map((rate) => {
                  return (
                    <option key={rate} value={rate}>
                      {rate}
                    </option>
                  );
                })}
                <option disabled value="SelectRating">
                  Select Rating
                </option>
              </select>
            </div>
            <div className="CommentContainer">
              <span>Comment:</span>
              <textarea
                value={reviewData.comment}
                onChange={(e) =>
                  setReviewData(() => ({
                    ...reviewData,
                    comment: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <button
              className="submitButton"
              onClick={() => {
                if (reviewData?.comment.trim() === "") {
                  CustomizeToast("warning", "Please Enter Comment");
                } else if (reviewData.rating === "SelectRating") {
                  CustomizeToast("warning", "Please Select Rating");
                } else {
                  console.log("ADD_REVIEW");
                  dispatch({
                    type: ActionTypes.ADD_REVIEW,
                    payload: {
                      review: { ...reviewData, restaurantId: restaurantId },
                    },
                  });
                  setIsReviewModalVisible(false);
                  setReviewData({
                    rating: "SelectRating",
                    comment: "",
                  });
                }
              }}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
