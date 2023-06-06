import React from 'react';
import Navbar from '../../../components/navbar/navbar';
import './HomeCircle.css';
import Footer from '../../../components/footer/footer';

function HomeCircle() {
  return (
    <div className='container'>
      < Navbar />
      <div className="main">
        <h1>Learning Circle</h1>
        <h2>An informal mechanism for bringing together learners who are interested in the same topic from across different fields and disciplines. A fantastic way to spend a small amount of time learning about new things with a group of people with same interests!</h2>
          <div className='jcb'>
            <button> Join </button>
            <button> Create </button>
          </div>
        </div>
        <div className='footer'>
        < Footer />
        </div>
    </div>
  );
}

export default HomeCircle;
