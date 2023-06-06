import ClubCard from "../ClubCard/ClubCard";
import "./ClubSection.css";
const ClubSection = () => {
  return (
    <div className="club-section">
      <div className="divcontainer">
        <div className="divw-full2">
          <div className="h2mx-auto1">
            <b className="clubs-of-soe">Clubs of SOE, Cusat</b>
          </div>
          <div className="design-a-financial">
            Design a financial operating system that works for your business.
          </div>
        </div>
        <div className="cards">
          <div className="divgrid1">
            <ClubCard />
            <ClubCard />
            <ClubCard />

              
          </div>
          <div className="divgrid1">
          <ClubCard />
            <ClubCard />
            <ClubCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubSection;
