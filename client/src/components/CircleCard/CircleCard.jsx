import "./CircleCard.css"

const ClubCard = () => {
    return (
    <div className="card-container">
      <div className="card">
        <a href="hottub">
          <div className="card--display">
            <h2>Javascript</h2>
          </div>
          <div className="card--hover">
            <h2>Javascript</h2>
            <p>Join the Javascript learning circle</p>
            <p className="link">Click to Join</p>
          </div>
          </a>
        <div className="card--border"></div>
      </div>
    </div>
    )
};

export default ClubCard