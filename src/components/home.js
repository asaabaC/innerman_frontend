import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import AchievementImage from '../images/image5.jpg';
import FacilitiesImage from '../images/image6.jpg';
import CommunityImage from '../images/image7.jpg';


const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Innerman Pre & Primary School</h1>
        <p>Empowering young minds for a brighter future.</p>
      </section>

      <section className="testimonials">
        <h2>What Our Community Says</h2>
        <blockquote>
          "Innerman School has provided my children with a well-rounded education and a caring environment."
          <cite>- Parent of a Grade 5 student</cite>
        </blockquote>
      </section>

      <section className="highlights">
        <div className="highlight">
          <img src={AchievementImage} alt="Our Achievements" />
          <h2>Our Achievements</h2>
          <p>We are proud of our pupils' academic and extracurricular accomplishments.</p>
        </div>
        <div className="highlight">
          <img src={FacilitiesImage} alt="Facilities" />
          <h2>State-of-the-Art Facilities</h2>
          <p>Explore our modern classrooms, dormitories, and sports facilities.</p>
        </div>
        <div className="highlight">
          <img src={CommunityImage} alt="Community" />
          <h2>Community Engagement</h2>
          <p>Join our community events and be a part of our family.</p>
        </div>
      </section>

      <div className="events-link-section">
        <Link to="/events" className="events-link">View Upcoming Events</Link>
      </div>
    </div>
  );
};

export default Home;
