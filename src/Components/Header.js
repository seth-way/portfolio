import React from 'react';
import ParticlesBg from 'particles-bg';
import { main } from '../Resources/personalInfo';

function Header() {
  const { linkedIn, github, name, description } = main;
  const firstName = name.split(' ')[0];

  return (
    <header>
      <ParticlesBg color='#305496' num={200} type='cobweb' bg={true} />
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>

        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#resume'>
              Resume
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>
              Portfolio
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#algorithms'>
              Algorithms
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>{`${firstName}.`}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className='social'>
            <a
              href={linkedIn}
              rel='noopener noreferrer'
              target='_blank'
              className='button btn linkedin-btn'
            >
              <i className='fa fa-linkedin'></i>LinkedIn
            </a>
            <a
              href={github}
              rel='noopener noreferrer'
              target='_blank'
              className='button btn github-btn'
            >
              <i className='fa fa-github'></i>Github
            </a>
          </ul>
        </div>
      </div>
      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
