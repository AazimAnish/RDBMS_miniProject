import { useCallback } from "react";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import SecondSection from "../../components/secondSection/SecondSection";
import ClubSection from "../../components/ClubSection/ClubSection";
import "./homepage.css";
const Homepage = () => {
  const navigate = useNavigate();

  const onInputhsButtonContainerClick = useCallback(() => {
    navigate("/signup-password");
  }, [navigate]);

  return (
    <div className="landing-page">
      <Navbar />
      <div className="main">
        <div className="main-section">
          <div className="divflex">
            <div className="divflex-1">
              <div className="divw-full">
                <div className="h2mx-auto">
                  <b className="lets-learn-together-container">
                    <p className="lets-learn">Let’s Learn</p>
                    <p className="lets-learn">Together</p>
                  </b>
                </div>
                <div className="p">
                  <div className="lorem-ipsum">lorem ipsum</div>
                </div>
              </div>
              <div className="divh-full">
                <div className="formhsform-53250e4e-4394-43ce">
                  <div className="inputemail-53250e4e-4394-43ce">
                    <div className="divplaceholder">
                      <div className="enter-your-email">Enter your email</div>
                    </div>
                  </div>
                  <div
                    className="inpuths-button"
                    onClick={onInputhsButtonContainerClick}
                  >
                    <div className="sign-me-up">Sign me up</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="divrelative-icon"
              alt=""
              src="/divrelative@2x.png"
            />
          </div>
        </div>
        <SecondSection />
        <ClubSection />
        <div className="circle-section">
          <b className="join-a-circle">Join a Circle and Learn</b>
          <img className="circle-group-icon" alt="" src="/circle-group.svg" />
        </div>
        <Footer />
      </div>
    </div>
  );
};


export default Homepage;
