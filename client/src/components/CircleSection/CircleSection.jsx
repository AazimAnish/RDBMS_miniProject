import CircleCard from "../CircleCard/CircleCard"
import "./CircleSection.css"

const CircleSection = () => {

  const circles = [
    {
      id: "1",
      head: "Javascript",
      hidhead: "Javascript",
      circleName:"Javascript",
    },{
      id: "2",
      head: "React",
      hidhead: "React",
      circleName:"React",
    },{
      id: "3",
      head: "DBMS",
      hidhead: "DBMS",
      circleName:"DBMS",
    },{
      id: "4",
      head: "PHP",
      hidhead: "PHP",
      circleName:"PHP",
    },{
      id: "5",
      head: "Software Design",
      hidhead: "Software Design",
      circleName:"Software Design",
    },{
      id: "6",
      head: "Blockchain",
      hidhead: "Blockchain",
      circleName:"Blockchain",
    }]

    return(
        <div className="circle-section">
          <b className="join-a-circle">Join a Circle and Learn</b>
          <div className="circle-container">
          {circles.map((circle) => (
              <CircleCard
                key={circle.id}
                head={circle.head}
                hidhead={circle.hidhead}
                circleName={circle.circleName}
              />
            ))}
            
          </div>
        </div>
    )
};

export default CircleSection