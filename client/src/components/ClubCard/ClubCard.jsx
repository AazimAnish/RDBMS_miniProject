/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./ClubCard.css"

const ClubCard = (props) => {
  return (
    <div className="black-card-container">
      <div className="black-card card--dark">
        <a href="https://sedscusat.org/">
          <div className="black-card--display">
            <i className="black-material-icons">{props.heading}</i>
            <h2>{props.subhead}</h2>
          </div>
          <div className="black-card--hover">
            <h2>{props.hidhead}</h2>
            <p>
            SEDS Cusat is a vibrant community of space enthusiasts who get together to discuss, explore, and have fun with the marvels of the cosmos. SEDS CUSAT organizes and coordinates a spectrum of technical competitions, engineering projects, workshops, social events, seminars, and outreach programs for the SpaceFam.
            </p>
            <p className="link">Click to know more</p>
          </div>
        </a>
        <div className="black-card--border"></div>
      </div>
    </div>
  );
};

export default ClubCard;
