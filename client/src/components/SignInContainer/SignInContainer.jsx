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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    // Send the form data to the server for authentication
    axios
      .post("http://localhost:8800/login", formData)
      .then((response) => {
        // Handle the response from the server, e.g., redirect to homepage if login is successful
        if (response.data.success) {
          // Redirect to homepage or any other authenticated route
          console.log("yayy");
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
            <input type="submit" id="btn" value="Login" />
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
