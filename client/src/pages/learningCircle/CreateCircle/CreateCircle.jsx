import React from "react";
import './CreateCircle.css';
import Navbar from "../../../Components/Navbar/Navbar";
import learncircle from '../../../../public/learningcircles.jpg'


const CreateCircle = () => {
  return (
    <div className="container">
      <div className="navbar">
        < Navbar />
      </div>


      <div className= 'main_container'>
        <div className= 'first_view_container'>
          <img src={learncircle} alt="" className= 'mimage' />
          <div className= 'fsview'>
            <p className= 'fsheading'>
              Let's Form <br /> <span>Learning Circles</span>
            </p>
            <p className= 'fstagline'>
              Learning Circles are a fantastic way to learn a new skill or
              technology. You get to learn from the different perspectives of
              the learners in the circle. So what are you waiting for? Click and
              create a circle now.
            </p>
            <a href="/join" rel="noopener noreferrer">
              <button className= 'search_button'>
                Join
              </button>
            </a>
          </div>
        </div>
        </div>


    </div>
  );
};

export default CreateCircle;
