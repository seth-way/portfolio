import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleClick = () => {
    const element = document.getElementById('home');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <footer className='w-full border-t flex flex-col sm:flex-row flex-no-wrap gap-4 items-center justify-center p-4'>
      <p>
        Thanks so much for checking out my site! Reach out & let's build
        something interesting.
      </p>
      <Button variant='outline' onClick={handleClick} className='group'>
        <ArrowUp className='group-hover:text-primary_C' />
        &nbsp;Home
      </Button>
    </footer>
  );
};

export default Footer;
