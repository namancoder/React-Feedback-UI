import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackdata";

import AboutPages from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedbackData, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedbackData.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedbackData]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbackData} />
                <FeedbackList
                  feedback={feedbackData}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path='/about' Component={AboutPages} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
}

export default App;
