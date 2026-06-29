import React, { useState } from 'react';
import { GiLotus } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'Campaigns', 'Causes', 'Impact', 'About Us', 'Blog'];
  const navigate = useNavigate();

  const handleClick = (link) => {
    setActive(link);
    if (link === 'Campaigns') {
      navigate('/campaign');
    } else if (link === 'Home') {
      navigate('/');
    }
  };

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
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={active === link ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault(); // Page ko reload/jump hone se rokne ke liye
                handleClick(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
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

export default Navbar;