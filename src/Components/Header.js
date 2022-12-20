import React from 'react';
import ParticlesBg from 'particles-bg';
import * as Scroll from 'react-scroll';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { main } from '../Resources/personalInfo';

function Header() {
  const { linkedIn, github, name, description } = main;
  const firstName = name.split(' ')[0];

  const handleSetActive = to => {
    console.log('handleSetActive');
    console.log(to);
  };

  const handleSetInactive = to => {
    console.log('handleSetInactive');
    console.log(to);
  };

  const createHeaderLink = name => (
    <Link
      activeClass='current'
      to={name}
      spy={true}
      hashSpy={true}
      smooth={true}
      offset={0}
      duration={1000}
      delay={500}
      isDynamic={true}
      spyThrottle={500}
      key={name}
    >
      {name}
    </Link>
  );

  const headerLinks = ['home', 'about', 'resume', 'contact'];

  return (
    <header id='home'>
      <ParticlesBg color='#305496' num={200} type='cobweb' bg={true} />
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>

        <div id='nav' className='nav'>
          {headerLinks.map(name => createHeaderLink(name))}
        </div>
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
        <Link
          to='about'
          smooth={true}
          offset={0}
          duration={1000}
          delay={500}
          isDynamic={true}
          spyThrottle={500}
          key={'about_2'}
        >
          <i className='icon-down-circle'></i>
        </Link>
      </p>
    </header>
  );
}

export default Header;
