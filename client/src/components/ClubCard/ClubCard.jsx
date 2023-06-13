/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./ClubCard.css"

const ClubCard = ({heading,link,subhead,hidhead,details,color}) => {
  return (
    <div className="black-card-container">
      <div className="black-card card--dark" style={{ backgroundColor: color }}>
        <a href={link} style={{ backgroundColor: color }}>
          <div className="black-card--display">
            <i className="black-material-icons">{heading}</i>
            <h2>{subhead}</h2>
            
          </div>
          <div className="black-card--hover">
            <h2>{hidhead}</h2>
            <p>{details}</p>
            <p className="link">Click to know more</p>
          </div>
        </a>
        <div className="black-card--border"></div>
      </div>
    </div>
  );
};

export default ClubCard;
