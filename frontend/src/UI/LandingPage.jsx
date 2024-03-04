import React, { useEffect, useRef } from "react";
import './LandingPage.css'
function LandingPage() {

  return (
    <>
      {/* ******************* MAIN PAGE ************************ */}
      <div className="landing-page">
        {/* ****** NAVBAR ****** */}
        <nav>
          <div className="logo">Logo</div>
          <div className="content">
            <div className="home">Home</div>
            <div className="feature">Feature</div>
            <div className="about">About</div>
            <div className="resources">Resources</div>
            <div className="contact">Contact</div>
          </div>
          <div className="authentication">
            <h4>Login</h4>
            <h4>Sign Up</h4>
          </div>
        </nav>
        {/* ****** HERO ****** */}
        <section className="hero">
          <h1>Ticketty
            <br />
            The modern way to store your problems.</h1>
          <div className="hero-action">
            <h4>Get Started</h4>
            <h4>Request A Demo</h4>
          </div>
          <div className="hero-testimonial">
            <h4>#1 Product Of The Week</h4>
            <h4>⭐⭐⭐⭐⭐ <br /> 3.5 K Happy User And Counting</h4>
            <h4>Learn, Collaborate & Improve Workflows</h4>
          </div>
        </section>
        {/* ****** CUSTOMER SUCCESS ****** */}
        <section className="customer-success">
          <header>
            <h1>Trending Automation </h1>
            <h1>Our Users Love</h1>
          </header>
          <div className="result">
            <div className="result-content">
              <h5>Customer Success</h5>
              <h1>Results That <br /> Build Reliability</h1>
              <h2>45M+ <br /> Automated Conversion </h2>
              <h2>85% <br /> Success Rate </h2>
            </div>
            <div className="result-video">
              <h5>Video</h5>
              <h1>Video</h1>
              <h2>Video <br /> Automated Conversion </h2>
              <h2>Video</h2>
            </div>
          </div>
        </section>
        {/* ****** CORE FEATURES ****** */}
        <section className="tech-stacks">
          <header>
            <h1>Tech Stacks</h1>
          </header>
          <ul className="tech-lists">
            <li>ReactJS</li>
            <li>React Query</li>
            <li>MySQL</li>
          </ul>
        </section>

        {/* ****** INDUSTRY SOLUTION ****** */}
        <section className="industry-solution">
          <header>
            <h1>Industry Solution</h1>
          </header>
          <ul className="industry-list">
            <li>1. Finance</li>
            <li>2. Healthcare</li>
            <li>3. Automobile</li>
            <li>4. Marketing</li>
            <li>5. Transport</li>
            <li>6. Education</li>
          </ul>
        </section>

        {/* ****** TUTORIAL ****** */}
        <section className="tutorials">
          <header>
            <h1>How It Works</h1>
          </header>
          <div className="tutorials-list">
            <h4>Login/Sign Up</h4>
            <h4>Onboarding</h4>
            <h4>Create Your First Ticket</h4>
            <h4>Update Tickets</h4>
            <h4>Admin Dashboard</h4>
          </div>
        </section>
        <section className="team">
          <header>
            <h1>Meet Our Creators</h1>
          </header>
          <div className="team-list">
            <div className="tim ">Tim</div>
            <div className="jackie ">Jackie</div>
          </div>
        </section>
      </div>
      {/* ******************* FOOTER ************************ */}
      <div className="landing-footer">
        <div className="call-to-action">
          <h1>Sign up and stay updated with <br /> the best tips & practice</h1>
          <h4>Subscribe</h4>
        </div>
        <div className="social">
          <h4>LinkedIn</h4>
          <h4>Github</h4>
        </div>
        <div className="email">
          <h4>We would love to hear from you</h4>
          <h1>hello@ticketty.com</h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage




