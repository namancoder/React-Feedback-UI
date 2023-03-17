import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackdata";
function App() {
  const [feedbackData, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text={"Feedback UI"} />
      <div className='container'>
        <FeedbackList feedback={feedbackData} />
      </div>
    </>
  );
}

export default App;
