import React from 'react';
import './Hero.css';
import { FaPlay } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">

      {/* Left Content */}
      <div className="hero-left">
        <h1 className="hero-heading">
          Because no one should face poverty alone.{' '}
          <span className="highlight">Donate to those who need it the most.</span>
        </h1>
        <p className="hero-subtext">
          Support rural & underprivileged families and make a real difference in someone's life.
        </p>
        <div className="hero-buttons">
          <button className="btn-donate-hero">
            <FaHeart style={{ marginRight: '8px' }} />
            Donate Now
          </button>
          <button className="btn-watch">
  <div className="play-icon-wrapper">
    <FaPlay style={{ fontSize: '12px', color: '#E65C00' }} />
  </div>
  <div>
    <span className="watch-title">Watch Video</span>
    <span className="watch-sub">See how we help</span>
  </div>
</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
          alt="Rural family"
          className="hero-img"
        />
      </div>

    </section>
  );
};

export default Hero;