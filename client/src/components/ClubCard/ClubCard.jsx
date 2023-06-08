/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./ClubCard.css"

const ClubCard = (props) => {
  return (
    <div className="black-card-container">
      <div className="black-card card--dark">
        <a href={props.link}>
          <div className="black-card--display">
            <i className="black-material-icons">{props.heading}</i>
            <h2>{props.subhead}</h2>
          </div>
          <div className="black-card--hover">
            <h2>{props.hidhead}</h2>
            <p>{props.details}
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
