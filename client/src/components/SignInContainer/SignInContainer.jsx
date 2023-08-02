import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./SignInContainer.css";
import axios from "axios";

const SignInContainer = () => {
  // const navigate = useNavigate();

  // const onButtonContainerClick = useCallback(() => {
  //   // Handle sign in logic
  //   console.log("Sign in clicked");
  // }, []);

  // const onSignUpText1Click = useCallback(() => {
  //   navigate("/signup-mail");
  // }, [navigate]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  // Function to set a cookie with a given name, value, and optional expiration time
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(
      value
    )};expires=${expires.toUTCString()};path=/`;
  }

  // Function to get the value of a cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    // Send the form data to the server for authentication
    const user_id = getCookie("user_id");

    // Prepare the form data to send to the backend
    const formDataToSend = {
      ...formData,
      user_id: user_id,
    };

    axios
      .post("http://localhost:8800/login", formDataToSend)
      .then((response) => {
        // Handle the response from the server, e.g., redirect to homepage if login is successful
        if (response.data.success) {
          // Redirect to homepage or any other authenticated route
          // console.log("yayy");
          const user = response.data.user;
          setCookie("user_id", user.user_id, 7); // Set the user_id cookie for 7 days
          window.location.replace("/"); // Change to the URL you want to redirect to
        } else {
          // Handle unsuccessful login, show an error message
          setError("Invalid username or password");
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // Handle any errors that occurred during the request
        setError("An error occurred during login");
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);
  };

  return (
    <div className="email-container">
      <h1 className="jump-sait">Jump Into SAIT</h1>
      <div className="frm">
        <form onSubmit={handleFormSubmit}>
          <p className="input-heading">
            <label htmlFor="user">Username:</label>
            <input
              type="text"
              id="user"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </p>

          <p className="input-heading">
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </p>
          <p>
            <input className="subbut" type="submit" id="btn" value="Login" />
          </p>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      <FrameComponent
        socialMediaLogo="/social-media-logo1.svg"
        propAlignItems="flex-start"
        propJustifyContent="flex-start"
        propWidth="35.5rem"
        propCursor="pointer"
      />
    </div>
  );
};

export default SignInContainer;
