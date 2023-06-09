import ClubCard from "../ClubCard/ClubCard";
import "./ClubSection.css";
const ClubSection = () => {

const clubs = [{id: "1",
link:"https://sedscusat.org/",
heading:"SEDS CUSAT",
subhead:"The Space Club of Cusat",
hidhead:"SEDS CUSAT",
details:"SEDS Cusat is a vibrant community of space enthusiasts who get together to discuss, explore, and have fun with the marvels of the cosmos. SEDS CUSAT organizes and coordinates a spectrum of technical competitions, engineering projects, workshops, social events, seminars, and outreach programs for the SpaceFam.",
},{id: "2",
link:"https://www.tinkerhub.org/",
heading:"Tinkerhub",
subhead:"The Learning Club of Cusat",
hidhead:"Tinkerhub",
details:"We’re a community of tinkerers, makers, policy geeks & students, and are working towards mapping and empowering people who share a passion to innovate.",
},{id:"3",
link:"https://www.iedccusat.org/",
heading:"IEDC",
subhead:"The Space Club of Cusat",
hidhead:"IEDC",
details:"IEDC CUSAT is a government-funded organization that aims to promote entrepreneurship among students and young professionals in India.",
},{id:"4",
link:"https://sedscusat.org/",
heading:"SEDS CUSAT",
subhead:"The Space Club of Cusat",
hidhead:"SEDS CUSAT",
details:"SEDS Cusat is a vibrant community of space enthusiasts who get together to discuss, explore, and have fun with the marvels of the cosmos. SEDS CUSAT organizes and coordinates a spectrum of technical competitions, engineering projects, workshops, social events, seminars, and outreach programs for the SpaceFam.",
},{id: "5",
link:"https://www.tinkerhub.org/",
heading:"Tinkerhub",
subhead:"The Learning Club of Cusat",
hidhead:"Tinkerhub",
details:"We’re a community of tinkerers, makers, policy geeks & students, and are working towards mapping and empowering people who share a passion to innovate.",
},{
  id:"6",
link:"https://www.iedccusat.org/",
heading:"IEDC",
subhead:"The Space Club of Cusat",
hidhead:"IEDC",
details:"IEDC CUSAT is a government-funded organization that aims to promote entrepreneurship among students and young professionals in India.",

}]

  return (
    <div className="club-section">
      <div className="divcontainer">
        <div className="divw-full2">
          <div className="h2mx-auto1">
            <b className="clubs-of-soe">Clubs of SOE, Cusat</b>
          </div>
          
        </div>
        <div className="cards">
          <div className="cardgrid">
          {clubs.map((club) => (
              <ClubCard
                key={club.id}
                heading={club.heading}
                link={club.link}
                subhead={club.subhead}
                hidhead={club.hidhead}
                details={club.details}
              />
            ))}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubSection;
