import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import TextField from "@mui/material/TextField";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission (for demonstration)
    // Logic to save the changes
    console.log("Changes saved!");
  };

  const handleCancel = () => {
    // Logic to cancel the changes
    console.log("Changes canceled!");
  };

  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="settings-box">
          <h2 className="profile-heading">Settings</h2>
          <div className="settings-buttons">
            <button className="blue-button">Accounts</button>
            <button className="blue-button">Circles</button>
          </div>
        </div>

        <div className="table-container">
          <div className="content-box">
            <div className="box">
              <hr />
              <h1>Account Details</h1>
              <hr />
              <form onSubmit={handleSave}>
                <div className="input-container">
                  <div className="input-column">
                    <span>First Name:</span>
                    <TextField
                      required
                      sx={{
                        minWidth: 300,
                        maxWidth: 300,
                        margin: 1.5,
                        marginLeft: 0,
                      }}
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>                 
                </div>
                <div className="input-container">
                  <div className="input-column">
                    <span>Work Email:</span>
                    <TextField
                      required
                      sx={{
                        minWidth: 300,
                        maxWidth: 300,
                        margin: 1.5,
                        marginLeft: 0,
                      }}
                      type="email"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-column">
                    <span>Mobile Number:</span>
                    <TextField
                      required
                      sx={{
                        minWidth: 300,
                        maxWidth: 300,
                        margin: 1.5,
                        marginLeft: 0,
                      }}
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="input-column">
                    <span>Password:</span>
                    <TextField
                      required
                      sx={{
                        minWidth: 300,
                        maxWidth: 300,
                        margin: 1.5,
                        marginLeft: 0,
                      }}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-column">
                    {/* Forgot Password? */}
                    <p className="forgot-password">Forgot Password?</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="buttons">
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
          <div>
          <h1>My Circles</h1>
              <hr />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
