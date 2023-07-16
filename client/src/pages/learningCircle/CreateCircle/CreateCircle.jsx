import "./CreateCircle.css";
import create from "../../../assets/create.png";
// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import axios from "axios";

const CreateCircle = () => {
  const [formData, setFormData] = useState({
    circle_name: "",
    description: "",
    max_participants: "",
    cover_photo: null,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/create_circle",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data", // Important for sending files in the form data
          },
        }
      );
      if (response.data.success) {
        // Circle created successfully, redirect to the homepage or circle details page
        // Replace the URL with the desired destination
        window.location.replace("/");
      } else {
        // Handle unsuccessful circle creation, show an error message or take appropriate action
        console.log("Circle creation failed:", response.data.error);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cover_photo: e.target.files[0], // Get the first selected file (single file upload)
    });
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main_container_circle">
        <div className="first_view_container">
          <img src={create} alt="" className="mimage_create" />
          <div className="fsview">
            <p className="fsheading">
              Let&apos;s Form <br /> <span>Learning Circles</span>
            </p>
            <p className="fstagline">
              Learning Circles are a fantastic way to learn a new skill or
              technology. You get to learn from the different perspectives of
              the learners in the circle. So what are you waiting for? Click and
              create a circle now.
            </p>
            <a href="/join-circle" rel="noopener noreferrer">
              <button className="search_button">Join</button>
            </a>
          </div>
        </div>

        <div className="second_form_section">
          <div className="ff_content">
            <p className="ff_heading">Circle Creation Information</p>
            <p className="ff_tagline">
              Fill in the details and meeting place and time to continue
            </p>
          </div>
          <form onSubmit={handleFormSubmit} className="ff_form_fields">
            <TextField
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
              }}
              required
              name="circle_name"
              id="outlined-basic"
              label="Circle Name"
              variant="outlined"
              value={formData.circle_name}
              onChange={handleInputChange}
            />

            <TextField
              required
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
              }}
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={formData.description}
              onChange={handleInputChange}
            />

            <TextField
              required
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
              }}
              name="max_participants"
              id="outlined-basic"
              label="Max Participants"
              variant="outlined"
              min="2"
              max="500"
              value={formData.max_participants}
              onChange={handleInputChange}
            />
            <input type="file" name="cover_photo" onChange={handleFileChange} />
            <Button
              type="submit"
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
                marginBottom: 5,
              }}
              variant="contained"
            >
              Create Circle
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateCircle;
