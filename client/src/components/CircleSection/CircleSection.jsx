import CircleCard from "../CircleCard/CircleCard"
import "./CircleSection.css"

const CircleSection = () => {
    return(
        <div className="circle-section">
          <b className="join-a-circle">Join a Circle and Learn</b>
          <div className="circle-container">
            <CircleCard/>
            <CircleCard/>
            <CircleCard/>
            <CircleCard/>
            <CircleCard/>
            <CircleCard/>
          </div>
        </div>
    )
};

export default CircleSection