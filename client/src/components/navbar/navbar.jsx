/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);

  // Check login status when the component mounts
  useEffect(() => {
    const isLoggedInCookie = cookies.user_id;
    setIsLoggedIn(!!isLoggedInCookie); // Set isLoggedIn based on the presence of the cookie
  }, [cookies]);

  const onResourceContainerClick = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onLearnContainerClick = useCallback(() => {
    navigate("/home-circle");
  }, [navigate]);

  const onClubContainerClick = useCallback(() => {
    navigate("/club");
  }, [navigate]);

  const onGetStartedContainerClick = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    // Clear the isLoggedIn cookie and update the state
    removeCookie("user_id"); // Provide the path explicitly
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="sait-logo">
            <img className="group-icon" alt="" src="/group.svg" />
          </div>
        </Link>
        <div className="div3">
          <div className="links">
            <div className="clubs" onClick={onResourceContainerClick}>
              <div className="resources2">Resources</div>
            </div>
            <div className="clubs" onClick={onLearnContainerClick}>
              <div className="resources2">Learn</div>
            </div>
            <div className="clubs" onClick={onClubContainerClick}>
              <div className="resources2">Clubs</div>
            </div>
          </div>
        </div>
        <div className="div4">
          {isLoggedIn ? ( // Show Logout button if logged in
            <div className="login1" onClick={onLogoutClick}>
              <div className="login2, clubs">Logout</div>
            </div>
          ) : (
            // Show Login and Get Started buttons if not logged in
            <>
              <div className="login1" onClick={onLoginContainerClick}>
                <div className="login2, clubs">Login</div>
              </div>
              <div className="get-started" onClick={onGetStartedContainerClick}>
                <div className="nav-divw-full2">
                  <div className="get-started1">Get started</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
