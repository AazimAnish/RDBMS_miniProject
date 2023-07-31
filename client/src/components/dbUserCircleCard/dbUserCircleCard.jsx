import { useState, useEffect } from "react";
import axios from "axios";
import "../dbCircleCard/dbCircleCard.css";

const UserCircleCards = () => {
  const [circles, setCircles] = useState([]);
  const [meetTime, setMeettime] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [location, setLocation] = useState("");
  const [agenda, setAgenda] = useState("");
  const [circleId, setCircleId] = useState("");

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

  const handleAddMeeting = async (circle_id) => {
    try {
      console.log("jdkw", circle_id);
      // const formDataToSend = new FormData();
      // formDataToSend.append("circle_id", circle_id);
      // formDataToSend.append("meeting_date", formData.meeting_date);
      // formDataToSend.append("meeting_time", formData.meeting_time);
      // formDataToSend.append("location", formData.location);
      // formDataToSend.append("meeting_agenda", formData.meeting_agenda);

      setCircleId(circle_id);
      const formData = {
        circleId: circle_id,
        meetTime: meetTime,
        meetDate: meetDate,
        location: location,
        agenda: agenda,
      };
      console.log("Form Data:", formData);

      // Make a POST request to add the meeting to the circle
      await axios.post("http://localhost:8800/add_meeting", formData, {
        withCredentials: true,
        // headers: { "Content-Type": "multipart/form-data" },
      });

      // After adding the meeting, fetch updated circles
      fetchCircles();
    } catch (error) {
      console.error("Error adding meeting:", error);
    }
  };

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div className="db-card-container">
      {circles &&
        circles.map((circle) => (
          <div className="db-card" key={circle.circle_id}>
            <div>
              <h1>{circle.circle_name}</h1>
              <p>{circle.description}</p>
              {/* {console.log(circle.user_role)} */}
              <img
                src={`http://localhost:8800/uploads/${circle.cover_photo}`}
                alt="Circle Cover"
              />
              {circle.user_role === "lead" && (
                <>
                  {/* Add Meeting Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAddMeeting(circle.circle_id);
                    }}
                    id="formid"
                  >
                    <div>
                      <label>Date:</label>
                      <input
                        type="date"
                        name="meeting_date"
                        // value={formData.meeting_date}
                        onChange={(e) => setMeetDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Time:</label>
                      <input
                        type="time"
                        name="meeting_time"
                        onChange={(e) => setMeettime(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Location:</label>
                      <input
                        type="text"
                        name="location"
                        // value={formData.location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Agenda:</label>
                      <input
                        type="text"
                        name="meeting_agenda"
                        // value={formData.meeting_agenda}
                        onChange={(e) => setAgenda(e.target.value)}
                      />
                    </div>
                    <button type="submit">Add Meeting</button>
                  </form>
                </>
              )}
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
