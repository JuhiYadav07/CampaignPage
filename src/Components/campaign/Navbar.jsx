import React from 'react';
import { Link } from 'react-router-dom'; // Bina reload routing ke liye zaroori hai
import { GiLotus } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css'; // Agar aapka CSS file ka naam alag hai toh use change kar lein

const CampaignNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">
          <GiLotus style={{ fontSize: '36px', color: '#E65C00' }} />
        </div>
        <div className="logo-text">
          <span className="brand-name">Dharmicseva</span>
          <span className="tagline">Seva • Sanskar • Samarpan</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li>
          {/* 1. Yahan se className="active" hata diya hai */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* 2. Yahan Campaigns par className="active" laga diya hai */}
          <Link to="/campaign" className="active">Campaigns</Link>
        </li>
        {/* Baaki links static hain */}
        <li><a href="#causes">Causes</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>

      <div className="navbar-actions">
        <span className="search-icon">
          <FiSearch style={{ fontSize: '20px', color: '#555', cursor: 'pointer' }} />
        </span>
        <button className="btn-login">Login</button>
        <button className="btn-donate">Donate Now</button>
      </div>
    </nav>
  );
};

export default CampaignNavbar;