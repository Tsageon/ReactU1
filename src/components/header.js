import React, { useState } from 'react';
import logo from "../images/logo.svg";
import arrowdown from "../images/icon-arrow-down.svg";
import arrowup from "../images/icon-arrow-up.svg";
import calander from "../images/icon-calendar.svg";
import todolist from "../images/icon-todo.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import heroImage from "../images/image-hero-desktop.png";
import clientDatabiz from "../images/client-databiz.svg";
import clientAudiophile from "../images/client-audiophile.svg";
import clientMeet from "../images/client-meet.svg";
import clientMaker from "../images/client-maker.svg";
import './header.css';

function Header() {
  const [showFeaturesList, setShowFeaturesList] = useState(false);
  const [showCompanyList, setShowCompanyList] = useState(false);

  const toggleFeaturesList = () => {
    setShowFeaturesList(!showFeaturesList);
  };

  const toggleCompanyList = () => {
    setShowCompanyList(!showCompanyList);
  };

  return (
    <div className='NavBar'>
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} className='NavBar-logo' alt='logo'/>
          <ul className="nav-list">
            <li onClick={toggleFeaturesList}>
              Features <img src={showFeaturesList ? arrowup : arrowdown} alt={showFeaturesList ? "Arrow Up" : "Arrow Down"} className="arrow-icon" />
              {showFeaturesList && (
                <ul className="sub-menu">
                  <ul><img src={todolist} alt="Todo List"/>Todo List</ul>
                  <ul><img src={calander} alt="Calendar"/>Calendar</ul>
                  <ul><img src={reminder} alt="Reminders"/>Reminders</ul>
                  <ul><img src={planning} alt="Planning"/>Planning</ul>
                </ul>
              )}
            </li>
            <li onClick={toggleCompanyList}>
              Company <img src={showCompanyList ? arrowup : arrowdown} alt={showCompanyList ? "Arrow Up" : "Arrow Down"} className="arrow-icon" />
              {showCompanyList && (
                <ul className="sub-menu">
                  <ul>About Us</ul>
                  <ul>Our Team</ul>
                  <ul>Our Culture</ul>
                </ul>
              )}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="top-right">
          <ul>Login</ul>
          <button className="register-btn">Register</button>
        </div>
      </div>
      <div className="content">
        <div className="text-content">
          <h1 className="large-text">Make<br/>remote work</h1>
          <p>Get your team in sync, no matter your location.<br/>Streamline processes, create team rituals and watch productivity soar.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <img src={heroImage} className='Hero-image' alt='hero'/>
      </div>
      <div className='Clients'>
        <img src={clientDatabiz} alt='Client Databiz'/>
        <img src={clientAudiophile} alt='Client Audiophile'/>
        <img src={clientMeet} alt='Client Meet'/>
        <img src={clientMaker} alt='Client Maker'/>
      </div>
    </div>
  );
}

export default Header;
