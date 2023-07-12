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
        <form action="http://localhost/RDBMS_MINIPROJECT/server/signup.php" method="post">
          <p className="input-heading">
            <label htmlFor="user">Username:</label>
            <input type="text" id="user" name="user" />
          </p>
          <p className="input-heading">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </p>
          
          <p className="input-heading">
            <label htmlFor="phoneno">Phone Number:</label>
            <input type="tel" id="phoneno" name="phoneno" pattern="[1-9]{1}[0-9]{9}" />
          </p>
          
          <p className="input-heading">
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" name="pass"/>
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
