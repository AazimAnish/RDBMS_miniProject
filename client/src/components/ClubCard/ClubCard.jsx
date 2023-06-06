import "./ClubCard.css"

const ClubCard = () => {
  return (
    <div className="card-container">
      <div className="card card--dark">
        <a href="https://sedscusat.org/">
          <div className="card--display">
            <i className="material-icons">SEDS CUSAT</i>
            <h2>The Space Club of Cusat</h2>
          </div>
          <div className="card--hover">
            <h2>SEDS</h2>
            <p>
            SEDS CUSAT is a vibrant community of space enthusiasts who get together to discuss, explore, and have fun with the marvels of the cosmos. SEDS CUSAT organizes and coordinates a spectrum of technical competitions, engineering projects, workshops, social events, seminars, and outreach programs for the SpaceFam.
            </p>
            <p className="link">Click to know more</p>
          </div>
        </a>
        <div className="card--border"></div>
      </div>
    </div>
  );
};

export default ClubCard;
