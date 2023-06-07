//import { useCallback, useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./SignUpContainer.css";

const SignInContainer = () => {
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
        <form action="http://localhost/RDBMS_MINIPROJECT/server/login.php" method="post">
          <p className="input-heading">
            <label htmlFor="user">Username:</label>
            <input type="text" id="user" name="user" />
          </p>
          <p className="input-heading">
            <label htmlFor="user">Email:</label>
            <input type="email" id="user" name="user" />
          </p>
          <p className="input-heading">
            <label htmlFor="user">Register Number:</label>
            <input type="number" id="user" name="user" min="10000000" max="99999999"/>
          </p>
          <p className="input-heading">
            <label htmlFor="user">Phone Number</label>
            <input type="tel" id="user" name="user" pattern="[1-9]{1}[0-9]{9}" />
          </p>
          
          <p className="input-heading">
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" name="pass" />
          </p>
          <p>
            <input type="submit" id="btn" value="Sign Up" />
          </p>
        </form>
      </div>
      
    </div>
  );
};

export default SignInContainer;
