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
      <div id="frm">
			<form action ="http://localhost/RDBMS_MINIPROJECT/server/create_circle.php" method="post">
			  <p>
				<label>lead Name:</label>
				<input type="text" id="lead_name" name="lead_name" />
			  </p>
			  <p>
				<label>circle_name:</label>
				<input type="text" id="circle_name" name="circle_name" />
			  </p>
              <p>
				<label>email:</label>
				<input type="text" id="email" name="email" />
			  </p>
              <p>
				<label>phoneNumber:</label>
				<input type="text" id="phone_no" name="phone_no" />
			  </p>
              <p>
				<label>Meet Place:</label>
				<input type="text" id="meet_place" name="meet_place" />
			  </p>
              <p>
				<label>meet time:</label>
				<input type="text" id="meet_time" name="meet_time" />
			  </p>
			  <p>
				<input type="submit" id="btn" value="submit" />
			  </p>
			</form>
		  </div>
    </div>
  );
};

export default CreateCircle;
