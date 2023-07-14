import "./CreateCircle.css";
import Navbar from "../../../Components/Navbar/Navbar";
import create from "../../../assets/create.png";
// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../../components/footer/footer";
import { useState } from "react";

const CreateCircle = () => {
  const [circleName, setCircleName] = useState("");
  const [description, setDescription] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("circle_name", circleName);
    formData.append("description", description);
    formData.append("creation_date", new Date().toISOString());
    formData.append("max_participants", maxParticipants);

    try {
      // Send the form data to the server using form submission
      const response = await fetch(
        "http://localhost/RDBMS_MINIPROJECT/server/create_circle.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    // Reset the form fields
    setCircleName("");
    setDescription("");
    setMaxParticipants("");
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main_container">
        <div className="first_view_container">
          <img src={create} alt="" className="mimage" />
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
          <form className="ff_form_fields" onSubmit={handleSubmit}>
            <TextField
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
              }}
              required
              value={circleName}
              onChange={(event) => setCircleName(event.target.value)}
              name="circle_name"
              placeholder="Circle Name"
              variant="outlined"
              id="circlename"
            />

            <TextField
              required
              sx={{
                minWidth: 300,
                maxWidth: 300,
                margin: 1.5,
                marginLeft: 0,
              }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              name="description"
              placeholder="Description"
              id="description"
            />

            <input
              type="number"
              value={maxParticipants}
              onChange={(event) => setMaxParticipants(event.target.value)}
              name="max_participants"
              placeholder="Max Participants"
              min="2"
              max="500"
              id="max_participants"
              required
            />
            <Button
              type="Submit"
              sx={{ minWidth: 300, maxWidth: 300, margin: 1.5, marginLeft: 0 }}
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
