import { useState, useEffect } from "react";
import axios from "axios";
import "../dbCircleCard/dbCircleCard.css";

const UserCircleCards = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Fetch the circles when the component mounts
    fetchCircles();
  }, []);

  const fetchCircles = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await axios.get(
        "http://localhost:8800/get_user_circle",
        {
          withCredentials: true, // This will include cookies in the request headers
        }
      );

      setCircles(response.data.circles); // Set the fetched circles array in the state
    } catch (error) {
      console.error("Error fetching circles:", error);
    }
  };

  const handleLeaveCircle = async (circle_id) => {
    try {
      // Make a POST request to leave the circle
      await axios.post(
        "http://localhost:8800/leave_circle",
        { circle_id },
        { withCredentials: true }
      );
      // After leaving the circle, fetch updated circles
      fetchCircles();
    } catch (error) {
      console.error("Error leaving circle:", error);
    }
  };

  return (
    <div className="db-card-container">
      {circles &&
        circles.map((circle) => (
          <div className="db-card" key={circle.circle_id}>
            <div>
              <h1>{circle.circle_name}</h1>
              <p>{circle.description}</p>
              <img
                src={`http://localhost:8800/uploads/${circle.cover_photo}`}
                alt="Circle Cover"
              />
              <button onClick={() => handleLeaveCircle(circle.circle_id)}>
                Leave Circle
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserCircleCards;
