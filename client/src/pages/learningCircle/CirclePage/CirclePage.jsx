import React, { useState, useEffect } from 'react';
import "./CirclePage.css";

const CircleDetails = () => {
  const [circleName, setCircleName] = useState('My Circle');
  const [meetingTime, setMeetingTime] = useState('10:00 AM');
  const [meetingPlace, setMeetingPlace] = useState('Conference Room');
  const [modeOfMeet, setModeOfMeet] = useState('In-person');
  const [members, setMembers] = useState(['John', 'Jane', 'Alice']);

  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setSelectedDate(currentDate);
  }, []);

  const markAttendance = (memberName) => {
    const updatedAttendance = { ...attendance };
    updatedAttendance[selectedDate] = updatedAttendance[selectedDate] || {};
    updatedAttendance[selectedDate][memberName] = true;
    setAttendance(updatedAttendance);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    // Send attendance data to the database
    // You can implement the API call or database integration here
    console.log(attendance);
    // Reset the attendance state or perform any necessary cleanup
    setAttendance({});
  };

  return (
    <div className="circle-details">
      <h1 className="circle-name">{circleName}</h1>
      <p className="meeting-time">Meeting Time: {meetingTime}</p>
      <p className="meeting-place">Meeting Place: {meetingPlace}</p>
      <p className="mode-of-meet">Mode of Meet: {modeOfMeet}</p>

      <h2 className="members">Members</h2>
      <ul className="member-list">
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>

      <h2 className="attendance">Attendance</h2>
      <p className="date">Date: {selectedDate}</p>

      <h3 className="mark-attendance">Mark Attendance</h3>
      <ul className="attendance-list">
        {members.map((member) => (
          <li key={member}>
            <label>
              <input
                type="checkbox"
                checked={attendance[selectedDate]?.[member] || false}
                onChange={() => markAttendance(member)}
              />
              {member}
            </label>
          </li>
        ))}
      </ul>

      <button className="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CircleDetails;
