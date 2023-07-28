import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import "./CirclePage.css";
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';
import eachCircle from "../../../assets/eachCircle.png";

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
    <div className='container'>
      <div className='navbar-cont'>
        <Navbar/>
      </div>
    <div className="main_container">
    <img src={eachCircle} alt="" className= 'mimage' />
      <div className='circle_div'>
      <h1 className="circle-name">{circleName}</h1>
      <div className='details-text'>
      <p className="meeting-time">Meeting Time: {meetingTime}</p>
      <p className="meeting-place">Meeting Place: {meetingPlace}</p>
      <p className="mode-of-meet">Mode of Meet: {modeOfMeet}</p>
      </div>
      </div>

      <div className='members-space'>
      <h2 className="headings">Members</h2>
      <ul className="member-list">
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      </div>

      <div className='attendence-container'>
      <h2 className="headings">Attendance</h2>
      <p className="date">Date: {selectedDate}</p>

      {/* <h3 className="mark-attendance">Mark Attendance</h3> */}
      <div className='members-group'>
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
      </div>
      </div>

      <Button className="submit-button"
              sx={{ minWidth: 300, maxWidth: 300, margin: 1.5, marginLeft: 0 }}
              variant="contained"
            >
              Submit
            </Button>
    </div>
    <div className='footer-cont'>
      <Footer/>
    </div>
    </div>
  );
};

export default CircleDetails;
