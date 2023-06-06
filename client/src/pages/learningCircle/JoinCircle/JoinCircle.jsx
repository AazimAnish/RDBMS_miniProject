import React, { useState } from 'react';

function JoinCircle() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleJoin = () => {
    // Handle join button click here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <div>
      <h1>Enter Details</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
      </form>
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default JoinCircle;
