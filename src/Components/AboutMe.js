import React from 'react';
import { main } from '../Resources/personalInfo';

const AboutMe = () => {
  const { name, image, bio, address, phone, email, resumeDownload } = main;
  const { city, state, zip } = address;
  const profilePic = `/images/${image}`;

  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src={profilePic}
            alt='Seth Profile Pic'
          />
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{name}</span>
                <br />
                <span>
                  {city}, {state} {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a href={resumeDownload} className='button'>
                  <i className='fa fa-download'></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
