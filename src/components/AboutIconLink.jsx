import { FaQuestion } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function AboutIconLink() {
  const path = useLocation().pathname === "/about";
  console.log(path);
  return !path ? (
    <div className='container about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  ) : null;
}

export default AboutIconLink;
