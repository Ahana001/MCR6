import "./ReviewList.css";

import { AiOutlineStar } from "react-icons/ai";

export function ReviewList({ reviewList }) {
  return (
    <ul className="ReviewListContainer">
      {reviewList.map((review, index) => {
        return (
          <li key={`REVIEW"${index}`}>
            <div className="ReviewHeader">
              <div className="ReviewUserDetails">
                <img src={review.pp} alt={review.revName} />
                <span>{review.revName}</span>
              </div>
              <div className="ReviewRating">
                {review.rating} <AiOutlineStar />
              </div>
            </div>
            <div className="ReviewComment">{review.comment}</div>
            <div className="HorizontalLine"></div>
          </li>
        );
      })}
    </ul>
  );
}
