import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <img src="../public/Logo.png" alt="I'm Safe Logo" className="app-logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Blogs</li>
            <li>Help</li>
            <li>Tourist</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <section className="content">
        <div className="side-by-side">
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/video-id" // Replace with the actual video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mission-statement">
            <h2>Why She's Safe</h2>
            <p>
              We are a team of passionate and committed members working towards empowering women.
              Believing that the first step towards empowerment is safety, we harness the power of technology 
              and trust to bring about transformation in the lives of women.
            </p>
            <p>
              Our mission is to build a movement where women form a trusted community and help empower each other 
              and be able to live in abundance.
            </p>
            <button className="sos-button">SOS</button>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Your Current Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3996746.468945366!2d35.17051048171977!3d-1.2920659750010928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f17313c4e3c0d%3A0xc3e2a6e51a1149c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1631223780309!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="Your current Location"
        ></iframe>
      </section>

      <footer className="footer">
        <p>&copy; 2024 She's Safe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
