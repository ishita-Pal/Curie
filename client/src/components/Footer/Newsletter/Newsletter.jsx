import React, { useState } from 'react';
import './Newsletter.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { fetchDataFromApi } from '../../../Utilis/api';
import Swal from 'sweetalert2';
import alertt from './../../../assets/alertt.gif';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please write your email',
      });
      return;
    }
    try {
      const response = await fetch('http://localhost:1337/api/emails', {
        method: 'POST',
        body: JSON.stringify({ data: { email } }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setEmail('');
      Swal.fire({
        title: 'You have successfully subscribed to Curie',
        width: 600,
        padding: '2em',
        color: '#716add',
        background: '#ffff',
        backdrop: `
          rgba(0,0,120,0.4)
          url(${alertt})
          left top
          no-repeat
        `,
      });
    } catch (error) {
      console.error(error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="newsletter">
      <div className="ncontent">
        <span className="small">Newsletter</span>
        <span className="big">Sign up for latest updates and offers</span>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        <div className="text">Will be used in accordance with our Privacy Policy</div>
        <div className="social">
          <div className="icon">
            <a href="https://www.instagram.com/curie0_o/" rel="noopener noreferrer">
              <FaInstagram size={14} />
            </a>
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
          <div className="icon">
            <FaFacebook size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
