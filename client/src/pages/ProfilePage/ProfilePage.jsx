import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
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
          <h2>Settings</h2>
          <div className="settings-buttons">
            <h3>
              <button className="blue-button">Accounts</button>
            </h3>
            <h3>
              <button className="blue-button">Circles</button>
            </h3>
            
          </div>
        </div>

        <div className="Account-section">
          <div className="content-box">
            <div className="box">
              <h2>Account</h2>
              <table className="account-table" border="1">
                <tbody>
                  <tr>
                    <td>First Name:</td>
                    <td>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Work Email:</td>
                    <td>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile Number:</td>
                    <td>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="content-box">
            <div className="box">
              <h2>My Circles</h2>
              <table className="circle-table" border="1">
                <tbody>
                  <tr>
                    <td>First Name:</td>
                    <td>{firstName}</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                  </tr>
                  <tr>
                    <td>Work Email:</td>
                    <td>{workEmail}</td>
                  </tr>
                  <tr>
                    <td>Mobile Number:</td>
                    <td>{mobileNumber}</td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
