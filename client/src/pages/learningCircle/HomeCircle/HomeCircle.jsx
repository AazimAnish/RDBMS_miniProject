/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeCircle.css";
import Navbar from "../../../Components/Navbar/Navbar";
// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../../components/footer/footer";
import CircleSection from "../../../components/CircleSection/CircleSection";
import learnhomeimg from "../../../assets/learnhomeimg.png";

const CreateCircle = () => {
  return (
    <div className="container">
      {/* <div className= "navbar"> */}
      <Navbar />
      {/* </div> */}

      <div className="first_view_container_home">
        <img src={learnhomeimg} alt="" className="mimagehome" />
        <div className="first_section">
          <div className="fstexts">
            <p className="fsheading">
              Introducing <span>Learning Circles</span>
            </p>
            <p className="fssheading">
              Android and Web Development, Calculus, CyberSecurity and
              <span> much more....</span>
            </p>
            <p className="fstagline">
              An informal mechanism for bringing together learners who are
              interested in the same topic from across different fields and
              disciplines. A fantastic way to spend a small amount of time
              learning about new things with a group of people with same
              interests!
            </p>

            <div className="buttons">
              <a href="/create-circle" rel="noopener noreferrer">
                <button className="fsbtn">Create Circles</button>
              </a>
              <a href="/create-circle" rel="noopener noreferrer">
                <button className="fsobtn">Join Existing Circles</button>
              </a>
            </div>
          </div>

          <div className="circleSection">
            <CircleSection />
          </div>
        </div>

        <div className="footerSection">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CreateCircle;
