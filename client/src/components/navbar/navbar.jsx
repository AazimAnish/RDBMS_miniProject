import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  const navigate = useNavigate();

  const onResourceContainerClick = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/login");
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

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="sait-logo">
          <img className="group-icon" alt="" src="/group.svg" />
        </div>
        <div className="div3">
          <div className="links">
            <div className="resource" onClick={onResourceContainerClick}>
              <div className="resources2">Resources</div>
            </div>
            <div className="learn" onClick={onLearnContainerClick}>
              <div className="resources2">Learn</div>
            </div>
            <div className="clubs" onClick={onClubContainerClick}>
              <div className="resources2">Clubs</div>
            </div>
          </div>
        </div>
        <div className="div4">
          <div className="login1" onClick={onLoginContainerClick}>
            <div className="login2">Login</div>
          </div>
          <div className="get-started" onClick={onGetStartedContainerClick}>
            <div className="nav-divw-full2">
              <div className="get-started1">Get started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
