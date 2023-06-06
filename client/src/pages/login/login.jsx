import { useCallback } from "react";
import SignInContainer from "../../components/SignInContainer/SignInContainer";
import {  useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();

  const onSignUpText2Click = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  return (
    <div className="login">
      <div className="sign-in">
        <SignInContainer />
        <div className="sign-up-redirect">
          <div className="text">
            <div className="dont-have-an-container">
              <span className="dont-have-an">Don’t have an account?</span>
              <span className="span">{` `}</span>
              <span className="span1">{`  `}</span>
            </div>
            <div className="sign-up" onClick={onSignUpText2Click}>
              Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="image-part"><img className="image-icon" alt="" src="/image.svg" /></div>
      
    </div>
  );
};

export default Login;
