import React from 'react';
import { GiLotus } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css'


const Footer = () =>{

    return (
      <>
      <div className='footer'>

        <div className='Dharmicseva'>
          <div className='icondiv'>
            <GiLotus />
            <div className='dharmictext'>
              <h1>Dharmicseva</h1>
              <p>Seva • Sanskar • Samarpan</p>
            </div>
          </div>
          <p>
            We work for the upliftment of rural commitments through education, healthcare, livelihood and community development
          </p>
          <div className='Social-icons'>
            <div className='icon-circle'><FaFacebook /></div>
            <div className='icon-circle'><FaInstagram /></div>
            <div className='icon-circle'><FaTwitter /></div>
            <div className='icon-circle'><FaYoutube /></div>
            <div className='icon-circle'><FaLinkedin /></div>
          </div>
        </div>

        <div className='Explore'>
          <h3>Explore</h3>
           <a href="#">Campaigns</a>
           <a href="#">Causes</a>
           <a href="#">Impact</a>
           <a href="#">Blog</a>
           <a href="#">Contact Us</a>
        </div>

        <div className='AboutUs'>
          <h3>About Us</h3>
           <a href="#">Our Mission</a>
           <a href="#">Our Team</a>
           <a href="#">Careers</a>
           <a href="#">Media</a>
           <a href="#">Testimonials</a>
        </div>

        <div className='Support'>
          <h3>Support</h3>
           <a href="#">Help Center</a>
           <a href="#">FAQs</a>
           <a href="#">Terms & Conditions</a>
           <a href="#">Privacy Policy</a>
        </div>

        <div className='Newsletter'>
        <h3>Newsletter</h3>
        <p>Stay updated with our latest campaign and impact stories</p>

        <div className='newsletter-input'>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
        </div>
        </div>

        </div>
        
        <hr className='footer-divider' />
        
        <div className='footer-bottom'>
          <p>@  2024 Dharmicseva. All rights reserved.</p>

          <div className='footer-badges'>
            <span>80G Tax Benefit</span>
            <span>|</span>
            <span>CSR Approved</span>
            <span>|</span>
            <span>FCRA Registered</span>
          </div>
        </div>
        </>

      
    )
}


export default Footer;
