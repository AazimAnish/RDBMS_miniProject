import React, { useState } from 'react';

const CreateCircle = () => {
  const [leadName, setLeadName] = useState('');
  const [circleName, setCircleName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meetPlace, setMeetPlace] = useState('');
  const [meetTime, setMeetTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted:', {
      leadName,
      circleName,
      email,
      phoneNumber,
      meetPlace,
      meetTime
    });
  };

  return (
    <div>
      <h1>Enter Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Lead Name:</label>
          <input
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
          />
        </div>
        <div>
          <label>Circle Name:</label>
          <input
            type="text"
            value={circleName}
            onChange={(e) => setCircleName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Meet Place:</label>
          <input
            type="text"
            value={meetPlace}
            onChange={(e) => setMeetPlace(e.target.value)}
          />
        </div>
        <div>
          <label>Meet Time:</label>
          <input
            type="text"
            value={meetTime}
            onChange={(e) => setMeetTime(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCircle;
