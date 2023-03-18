import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPages() {
  return (
    <Card>
      <div className='about'>
        <h1>Feedback Project</h1>
        <p>React App to leave feedback reviews</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPages;
