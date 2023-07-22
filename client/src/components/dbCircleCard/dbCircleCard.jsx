import { useState, useEffect } from "react";
import axios from "axios";
import "./dbCircleCard.css";

const CircleCards = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Fetch the circles when the component mounts
    fetchCircles();
  }, []);

  const fetchCircles = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await axios.get("http://localhost:8800/get_circles");
      setCircles(response.data);
    } catch (error) {
      console.error("Error fetching circles:", error);
    }
  };

  return (
    <div className="card-container">
      {circles &&
        circles.map((circle) => (
          <div className="card" key={circle.id}>
            <div>
              <h1>{circle.circle_name}</h1>
              <p>{circle.description}</p>
              <img
                src={`http://localhost:8800/uploads/${circle.cover_photo}`}
                alt="Circle Cover"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CircleCards;
