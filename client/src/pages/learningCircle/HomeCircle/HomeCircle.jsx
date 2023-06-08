import React from 'react';
import './HomeCircle.css';
import Footer from '../../../components/footer/footer';
import ClubCard from '../../../components/CircleCard/CircleCard';
import Navbar from '../../../Components/Navbar/Navbar';

function HomeCircle() {
  return (
    <div className='containerlearn'>
      < Navbar />
      <div className="mainlearn">
        <h1 className='textlearn'>Learning Circle</h1>
        <h2>An informal mechanism for bringing together learners who are interested in the same topic from across different fields and disciplines. A fantastic way to spend a small amount of time learning about new things with a group of people with same interests!</h2>
          <div className='jcb'>
            <button> Join </button>
            <button> Create </button>
          </div>
        </div>
        <div className='clubcards'>
          < ClubCard />
        </div>
        <div className='footerlearn'>
        < Footer />
        </div>
    </div>
  );
}

export default HomeCircle;
