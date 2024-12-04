import React, { useState } from 'react';
import logo from "../images/logo.svg";
import arrowdown from "../images/icon-arrow-down.svg";
import arrowup from "../images/icon-arrow-up.svg";
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
              Features <img src={ arrowdown} alt={arrowup} className="arrow-icon" />
            </li>
            <li onClick={toggleCompanyList}>
              Company <img src={arrowdown} alt={"Arrow Down"} className="arrow-icon" />
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