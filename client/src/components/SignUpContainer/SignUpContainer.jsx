//import { useCallback, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUpContainer.css";

const SignInContainer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform further actions with the form data
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 // const navigate = useNavigate();
  

  // const onButtonContainerClick = useCallback(() => {
  //   // Handle sign in logic
  //   console.log("Sign in clicked");
  // }, []);

  // const onSignUpText1Click = useCallback(() => {
  //   navigate("/signup-mail");
  // }, [navigate]);

  
  return (
    <div className="email-container">
      <h1 className="jump-sait">Jump Into SAIT</h1>
      <div className="sign_in-frm">
        <form /*action="http://localhost/RDBMS_MINIPROJECT/server/signup.php" method="post"*/>
          <p className="input-heading">
            <label className="signlabel" htmlFor="user">Username:</label>
            <input
              type="text"
              id="user"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </p>
          <p className="input-heading">
            <label className="signlabel" htmlFor="user">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </p>
          {/* <p className="input-heading">
            <label htmlFor="user">Register Number:</label>
            <input type="number" id="user" name="user" min="10000000" max="99999999"/>
          </p> */}
          <p className="input-heading">
            <label className="signlabel" htmlFor="user">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[1-9]{1}[0-9]{9}"
              onChange={handleInputChange}
              value={formData.phoneNumber}
            />
          </p>
          
          <p className="input-heading">
            <label className="signlabel" htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </p>
            <button className="signbtn" type="submit" id="button">Sign Up</button>
        </form>
      </div>
      
    </div>
  );
};

export default SignInContainer;
