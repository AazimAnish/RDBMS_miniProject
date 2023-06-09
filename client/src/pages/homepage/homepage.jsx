//import { useCallback } from "react";
//import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import SecondSection from "../../components/secondSection/SecondSection";
import ClubSection from "../../components/ClubSection/ClubSection";
import CircleSection from "../../components/CircleSection/CircleSection"
import "./homepage.css";
import Navbar from "../../components/navbar/navbar";


const Homepage = () => {
  // const navigate = useNavigate();

  // const onInputhsButtonContainerClick = useCallback(() => {
  //   navigate("/signup-password");
  // }, [navigate]);

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
                    <p className="lets-learn">What is</p>
                    <p className="lets-learn">SAIT?</p>
                  </b>
                </div>
                <div className="p">
                  <div className="lorem-ipsum">Students Association of IT</div>
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
        <CircleSection/>
        <Footer />
      </div>
    </div>
  );
};


export default Homepage;
