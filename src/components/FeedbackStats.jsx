import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {
  const { feedback: feedbacks } = useContext(FeedbackContext);
  let average = (
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className='feedback-stats'>
      <h4> {feedbacks.length}</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
