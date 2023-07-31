import { useState, useEffect } from "react";
import axios from "axios";
import "./dbCircleCard.css";

const CircleCards = () => {
  const [circles, setCircles] = useState([]);
  const [userJoinedCircles, setUserJoinedCircles] = useState([]);

  useEffect(() => {
    // Fetch the circles and the user's joined circles when the component mounts
    fetchCircles();
    fetchUserJoinedCircles();
  }, []);

  const fetchCircles = async () => {
    try {
      // Make a GET request to your backend API endpoint to fetch all circles
      const response = await axios.get("http://localhost:8800/get_circles", {
        withCredentials: true,
      });
      setCircles(response.data);
    } catch (error) {
      console.error("Error fetching circles:", error);
    }
  };

  const fetchUserJoinedCircles = async () => {
    try {
      // Make a GET request to your backend API endpoint to fetch circles the user has joined
      const response = await axios.get(
        "http://localhost:8800/user_joined_circles",
        {
          withCredentials: true,
        }
      );
      setUserJoinedCircles(response.data);
    } catch (error) {
      console.error("Error fetching user's joined circles:", error);
    }
  };

  const handleJoinCircle = async (circle_id) => {
    try {
      // Make a POST request to join the circle
      console.log("circle_id", circle_id);
      await axios.post(
        "http://localhost:8800/join_circle",
        { circle_id },
        { withCredentials: true }
      );
      // After joining the circle, fetch updated circles and user's joined circles
      fetchCircles();
      fetchUserJoinedCircles();
    } catch (error) {
      console.error("Error joining circle:", error);
    }
  };

  return (
    <div className="db-card-container">
      {circles &&
        circles.map((circle) => (
          <div className="db-card" key={circle.id}>
            <div>
              <h1>{circle.circle_name}</h1>
              <p>{circle.description}</p>
              <img
                src={`http://localhost:8800/uploads/${circle.cover_photo}`}
                alt="Circle Cover"
              />
              {userJoinedCircles.includes(circle.circle_id) ? (
                <p>Joined</p>
              ) : (
                <button onClick={() => handleJoinCircle(circle.circle_id)}>
                  Join
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CircleCards;
