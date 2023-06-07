import { useCallback } from "react";
import { redirect } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const navigate = redirect();

  const onSignupButtonContainerClick = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  return (
    <div className="footer1">
      <div className="signup-container">
        <div className="text1">
          <b className="ready-to-level-container">
                     <p style={{fontSize: '30px'}}  className="ready-to-level">Ready to level up your Academics?</p>

          </b>
        </div>
        <div className="signup-button" onClick={onSignupButtonContainerClick}>
          <div className="sign-me-up1">Sign me up</div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-info">
          <div className="div5">
            <div className="svg" />
            <div className="p10">
              <div className="sait-is-the-container">
                <p className="ready-to-level">{`SAIT is the short for Student Association of `}</p>
                <p className="ready-to-level">{`Information Technology is an association from `}</p>
                <p className="ready-to-level">SOE, Cusat</p>
              </div>
            </div>
            <div className="navflex">
              <img className="agroup-icon" alt="" src="/agroup.svg" />
              <img className="agroup-icon" alt="" src="/agroup1.svg" />
              <img className="agroup-icon" alt="" src="/agroup2.svg" />
            </div>
          </div>
          <div className="pt-14">
          
          </div>
        </div>
        <div className="div6">
          <div className="footer-list">
            <div className="solution">
              <div className="solutions">Solutions</div>
              <div className="divmt-4">
                <div className="freelancers">Freelancers</div>
                <div className="freelancers">Small businesses</div>
                <div className="freelancers">Customers</div>
                <div className="freelancers">Pricing</div>
              </div>
            </div>
            <div className="company1">
              <div className="solutions">Company</div>
              <div className="divmt-41">
                <div className="freelancers">About</div>
                <div className="freelancers">Careers</div>
                <div className="freelancers">Contact</div>
              </div>
            </div>
            <div className="features">
              <div className="solutions">Features</div>
              <div className="features2">
                <div className="freelancers">Invoicing</div>
                <div className="freelancers">Bill Pay</div>
                <div className="freelancers">Flow</div>
              </div>
            </div>
            <div className="education">
              <div className="solutions">Education</div>
              <div className="divmt-4">
                <div className="freelancers">Blog</div>
                <div className="freelancers">eBooks</div>
                <div className="freelancers">Guides</div>
              </div>
            </div>
          </div>
          <div className="policy">
            <div className="terms-conditions">{`Terms & Conditions`}</div>
            <div className="privacy-policy3">Privacy Policy</div>
            <div className="cookie-policy">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;