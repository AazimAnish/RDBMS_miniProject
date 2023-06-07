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
          
        </div>
        <div className="cards">
          <div className="divgrid1">
            <ClubCard 
            heading="SEDS CUSAT"
            subhead="The Space Club of Cusat"
            hidhead="SEDS CUSAT"
            />
            <ClubCard 
            heading="Tinkerhub"
            subhead="The Learning Club of Cusat"
            hidhead="Tinkerhub"
            />
            <ClubCard 
            heading="IEDC"
            subhead="The Space Club of Cusat"
            hidhead="IEDC"
            />

              
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
