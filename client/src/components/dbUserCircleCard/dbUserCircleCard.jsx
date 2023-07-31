/* eslint-disable react-hooks/exhaustive-deps */
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
  const [circleMeetings, setCircleMeetings] = useState({});

  useEffect(() => {
    // Fetch the circles when the component mounts
    fetchCircles();
  }, []);

  useEffect(() => {
    fetchCircleMeetings();
  }, [circles]);

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

  const fetchCircleMeetings = async () => {
    try {
      const circleMeetingsData = {};
      for (const circle of circles) {
        const response = await axios.get(
          `http://localhost:8800/view_meeting/${circle.circle_id}`,
          {
            withCredentials: true,
          }
        );
        circleMeetingsData[circle.circle_id] = response.data.meetings;
        // console.log(response.data.meetings);
      }
      console.log(circleMeetingsData);
      setCircleMeetings(circleMeetingsData);
    } catch (error) {
      console.error("Error fetching circle meetings:", error);
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

  const handleUpdateMeetingDate = async (circle_id, meeting_id) => {
    try {
      // Make a POST request to update the meeting date
      const formData = {
        meetTime: meetTime,
        meetDate: meetDate,
      };
      await axios.post(
        `http://localhost:8800/update_meeting/${circle_id}/${meeting_id}`,
        formData,
        {
          withCredentials: true,
        }
      );
      // After updating the meeting date, fetch the updated circle meetings
      fetchCircleMeetings();
    } catch (error) {
      console.error("Error updating meeting date:", error);
    }
  };

  const handleRemoveMeeting = async (circle_id, meeting_id) => {
    try {
      // Make a POST request to remove the meeting
      await axios.post(
        `http://localhost:8800/remove_meeting/${circle_id}/${meeting_id}`,

        {
          withCredentials: true,
        }
      );
      // After removing the meeting, fetch the updated circle meetings
      fetchCircleMeetings();
    } catch (error) {
      console.error("Error removing meeting:", error);
    }
  };

  const handleAddMeeting = async (circle_id) => {
    try {
      setCircleId(circle_id);
      const formData = {
        circleId: circle_id,
        meetTime: meetTime,
        meetDate: meetDate,
        location: location,
        agenda: agenda,
      };

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
              <div>
                {circleMeetings &&
                  circleMeetings[circle.circle_id]?.map((meeting) => (
                    <div key={meeting.meeting_id}>
                      {console.log("meetingId", meeting.meeting_id)}
                      <p>Date: {meeting.meeting_date}</p>
                      <p>Time: {meeting.meeting_time}</p>
                      <p>Location: {meeting.location}</p>
                      <p>Agenda: {meeting.meeting_agenda}</p>
                      <input
                        type="date"
                        name="updated_meeting_date"
                        value={meetDate}
                        onChange={(e) => setMeetDate(e.target.value)}
                      />
                      <input
                        type="time"
                        name="updated_meeting_time"
                        value={meetTime}
                        onChange={(e) => setMeettime(e.target.value)}
                      />
                      <button
                        onClick={() =>
                          handleUpdateMeetingDate(
                            circle.circle_id,
                            meeting.meeting_id
                          )
                        }
                      >
                        Update Meeting Date
                      </button>

                      <button
                        onClick={() =>
                          handleRemoveMeeting(
                            circle.circle_id,
                            meeting.meeting_id
                          )
                        }
                      >
                        Remove Meeting
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserCircleCards;
