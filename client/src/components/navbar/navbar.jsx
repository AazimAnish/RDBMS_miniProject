import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";
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

  // const onClubContainerClick = useCallback(() => {
  //   navigate("/club");
  // }, [navigate]);

  const onGetStartedContainerClick = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

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
            <a href="#club" className="clubs" >
                <div className="resources2">Clubs</div>
            </a>
          </div>
        </div>
        <div className="div4">
          <div className="login1" onClick={onLoginContainerClick}>
            <div className="login2, clubs">Login</div>
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
