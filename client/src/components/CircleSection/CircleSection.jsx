import CircleCard from "../CircleCard/CircleCard";
import "./CircleSection.css";
import js from "../../assets/images/js.png";
import reactLogo from "../../assets/images/react.png";
import dbmsLogo from "../../assets/images/database.png";
import blockchainLogo from "../../assets/images/blockchain.png";
import softwareDesignLogo from "../../assets/images/software_design.png";
import phpLogo from "../../assets/images/php.png";

const CircleSection = () => {
  const circles = [
    {
      id: "1",
      head: "Javascript",
      hidhead: "Javascript",
      circleName: "Javascript",
      img: js,
      alt: "js-icon",
    },
    {
      id: "2",
      head: "React",
      hidhead: "React",
      circleName: "React",
      img: reactLogo,
      alt: "react-Logo",
    },
    {
      id: "3",
      head: "DBMS",
      hidhead: "DBMS",
      circleName: "DBMS",
      img: dbmsLogo,
      alt: "database-Logo",
    },
    {
      id: "4",
      head: "PHP",
      hidhead: "PHP",
      circleName: "PHP",
      img: phpLogo,
      alt: "php-Logo",
    },
    {
      id: "5",
      head: "Software Design",
      hidhead: "Software Design",
      circleName: "Software Design",
      img: softwareDesignLogo,
      alt: "software Design Logo",
    },
    {
      id: "6",
      head: "Blockchain",
      hidhead: "Blockchain",
      circleName: "Blockchain",
      img: blockchainLogo,
      alt: "blockchain-Logo",
    },
  ];

  return (
    <div className="circle-section">
      <b className="join-a-circle">Join a Circle and Learn</b>
      <div className="circle-container">
        {circles.map((circle) => (
          <CircleCard key={circle.id} {...circle} />
        ))}
      </div>
    </div>
  );
};

export default CircleSection;
