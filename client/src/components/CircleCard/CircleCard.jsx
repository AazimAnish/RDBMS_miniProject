/* eslint-disable react/prop-types */
import "./CircleCard.css";

const ClubCard = ({ head, hidhead, circleName, img }) => {
  return (
    <div className="card-container">
      <div className="card">
        <a href="hottub">
          <div className="card--display">
            <h2>{head}</h2>
            <img src={img} alt="js" className="card-img" />
          </div>
          <div className="card--hover">
            <h2>{hidhead}</h2>
            <p>Join the {circleName} learning clan</p>
            <p className="link">Click to Join</p>
          </div>
        </a>
        <div className="card--border"></div>
      </div>
    </div>
  );
};

export default ClubCard;
