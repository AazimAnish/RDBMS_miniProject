import React from "react";
import './JoinCircle.css';
import Navbar from "../../../Components/Navbar/Navbar";
import join from '../../../assets/join.png'
// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../../components/footer/footer";


const JoinCircle = () => {
  return (
    <div className="container">
      <div className="navbar">
        < Navbar />
      </div>


      <div className= 'main_container'>
        <div className= 'first_view_container'>
          <img src={join} alt="" className= 'mimage' />
          <div className= 'fsview'>
            <p className= 'fsheading'>
              Let's Join <br /> <span>Learning Circles</span>
            </p>
            <p className= 'fstagline'>
              In order to join a learning circle, you need to enter the circle code as
              well as a secret key. Both of these credentials can be retrieved from
              your circle lead. If you already have them fill them out, and you are
              good to go!.
            </p>
            <a href="/create-circle" rel="noopener noreferrer">
              <button className= 'search_button'>
                create
              </button>
            </a>
          </div>
        </div>




            <div className='second_form_section'>
              <div className='ff_content'>
                <p className='ff_heading'>Enter Details</p>
                <p className='ff_tagline'>
                Type in your circle name to verify it to join a learning circle
                </p>
              </div>
              <div className='ff_form_fields_join'>
                <TextField
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  required
                  // error={
                  //   errors && JSON.stringify(errors).includes("lead.name")
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   errors && JSON.stringify(errors).includes("lead.name")
                  //     ? "Lead Name is Required"
                  //     : ""
                  // }
                  name="name"
                  id="outlined-basic"
                  label="Circle Name"
                  variant="outlined"
                  // value={create.name}
                  // onChange={leadchangeHandler}
                />
                {/* <TextField
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  required
                  // error={
                  //   errors && JSON.stringify(errors).includes("lead.email")
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   errors && JSON.stringify(errors).includes("lead.email")
                  //     ? "Lead Email Address is Required"
                  //     : ""
                  // }
                  name="email"
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  // value={create.email}
                  // onChange={leadchangeHandler}
                /> */}

                {/* <TextField
                  required
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  name="phone"
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  // value={create.phone}
                  // onChange={changeHandler}
                /> */}
                {/* <TextField
                  required
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  name="meet_place"
                  id="outlined-basic"
                  label="Meet Place"
                  placeholder="A Place in your campus to meet"
                  variant="outlined"
                  // value={create.meet_place}
                  // onChange={changeHandler}
                />
                <TextField
                  required
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  name="meet_time"
                  id="outlined-basic"
                  label="Meet Time"
                  placeholder="HH:MM AM/PM"
                  variant="outlined"
                  // value={create.meet_time}
                  // onChange={changeHandler}
                />

                <TextField
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  required
                  name="type"
                  // error={
                  //   errors && JSON.stringify(errors).includes("passcode")
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   errors && JSON.stringify(errors).includes("passcode")
                  //     ? "Team Secret Key is Required"
                  //     : ""
                  // }
                  id="outlined-basic"
                  label="Type of Meet"
                  placeholder="Online/Offline"
                  variant="outlined"
                  // value={create.passcode}
                  // onChange={changeHandler}
                /> */}

                {/* <TextField
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  required
                  name="cpasscode"
                  id="outlined-basic"
                  label="Confirm Secret Key"
                  variant="outlined"
                  // error={
                  //   confirm !== create.passcode &&
                  //   confirm &&
                  //   create.passcode &&
                  //   confirm.length > 0
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   confirm !== create.passcode &&
                  //   confirm &&
                  //   create.passcode &&
                  //   confirm.length > 0
                  //     ? "Both Screct Keys Should be the Same"
                  //     : ""
                  // }
                  // onChange={(e) => {
                  //   setConfirm(e.target.value);
                  // }}
                /> */}
              </div>
            </div>

            <Button className="joincirclebutton"
              sx={{ minWidth: 300, maxWidth: 300, margin: 1.5, marginLeft: 0 }}
              // disabled={
              //   create.phone &&
              //   create.phone.length >= 10 &&
              //   college &&
              //   verify &&
              //   confirm === create.passcode
              //     ? false
              //     : true
              // }
              // onClick={() => {
              //   postData();
              // }}
              variant="contained"
            >
              Join Circle
            </Button>


        </div>

        < Footer />

                </div>
  );
};

export default JoinCircle;
