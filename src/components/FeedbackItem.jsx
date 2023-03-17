import { useState } from "react";
import Card from "./shared/Card";
function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("this is example feedback item");
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
