import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import './VoicesOfCompassion.css';


const VoicesOfCompassion = () =>{
  return (
    <div className='Voicebox'>

      <h2 className='voices-heading'> Voices of Compassion </h2>

      <div className='voices-cards'>

        <div className='V1'>
          <div className='v1-1'>
            <FaQuoteLeft color= "#FF6B00" />
            <p>Dharmicseva helped me understand the true meaning of giving Transparent, trustworthy and impactful!</p>
          </div>
          <div className='v1-2'>
            <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
            <div>
              <h4>Ankita Desai</h4>
              <p>Pune</p>
            </div>
          </div>
        </div>

        <div className='V2'>
          <div className='v2-1'>
            <FaQuoteLeft color= "#FF6B00" />
            <p>The healthcare support reached our village at the right time. Grateful for people like you.</p>
          </div>
          <div className='v2-2'>
            <img src="https://i.pravatar.cc/40?img=2" alt="avatar" />
            <div>
              <h4>Ramesh Yadav</h4>
              <p>Madhya Pradesh</p>
            </div>
          </div>
        </div>

        <div className='V3'>
          <div className='v3-1'>
            <FaQuoteLeft color= "#FF6B00" />
            <p>Empowering Rural women is empoweing India. Thankyou Dharmicseva!</p>
          </div>
          <div className='v3-2'>
            <img src="https://i.pravatar.cc/40?img=3" alt="avatar" />
            <div>
              <h4>Sunita Rao</h4>
              <p>Bangalore</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default VoicesOfCompassion;