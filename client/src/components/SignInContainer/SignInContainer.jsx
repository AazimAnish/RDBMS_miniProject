import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./SignInContainer.css";

const SignInContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onButtonContainerClick = useCallback(() => {
    // Handle sign in logic
    console.log("Sign in clicked");
  }, []);

  const onSignUpText1Click = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }, []);

  return (
		<div>
		  <h1>LOGIN</h1>
		  <div id="frm">
			<form action ="http://localhost/RDBMS_MINIPROJECT/server/login.php" method="post">
			  <p>
				<label>Username:</label>
				<input type="text" id="user" name="user" />
			  </p>
			  <p>
				<label>Password:</label>
				<input type="password" id="pass" name="pass" />
			  </p>
			  <p>
				<input type="submit" id="btn" value="Login" />
			  </p>
			</form>
		  </div>
		</div>
	  );
	}
      <FrameComponent
        socialMediaLogo="/social-media-logo1.svg"
        propAlignItems="flex-start"
        propJustifyContent="flex-start"
        propWidth="35.5rem"
        propCursor="pointer"
      />

export default SignInContainer;
