import { motion } from 'framer-motion';
import HexBG from './HexBG';
import {
  Card,
} from '@/components/ui/card';

import gitHubLogo from '../assets/images/github.svg';
import linkedinLogo from '../assets/images/linkedin.svg';
import background from '../assets/resume-info/background.json';
import socials from '../assets/resume-info/socials.json';

const { fullName, role } = background;
const { github, linkedIn } = socials;
const firstName = fullName.split(' ')[0];
const githubURL = `https://github.com/${github}`;
const linkedInURL = `https://www.linkedin.com/in/${linkedIn}`;

export default function Home() {
  return (
    <Card
      id='home'
      className='section-card relative h-[98vh] flex flex-col items-center justify-center overflow-hidden gap-4  z-10'
    >
      <h1
        className='uppercase relative gap-4 bg-background'
        data-name={firstName}
      >
        {firstName}
      </h1>
      <p className='m-0 -mt-2 lowercase'>{role}.</p>
      <div
        id='social-links'
        className='min-h-4 max-h-8 h-[5vw] flex items-center gap-4 z-20'
      >
        <motion.a
          className='h-full aspect-square'
          href={githubURL}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${name}'s GitHub profile`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
        >
          <img src={gitHubLogo} alt='github logo' />
        </motion.a>
        <motion.a
          className='h-full aspect-square'
          href={linkedInURL}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${name}'s LinkedIn profile`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
        >
          <img src={linkedinLogo} alt='linkedIn logo' />
        </motion.a>
      </div>
      <HexBG />
    </Card>
  );
}
