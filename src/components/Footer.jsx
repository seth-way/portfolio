import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [hidden, setHidden] = useState(true);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { threshold: 0.5 });

  const handleClick = () => {
    const element = document.getElementById('home');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      ref={footerRef}
      className='w-full border-t flex flex-col flex-no-wrap gap-4 items-center justify-center p-4 overflow-hidden'
    >
      <div
        onClick={() => setHidden(!hidden)}
        className='text-primary cursor-pointer min-h-8 max-w-[90%]'
      >
        <AnimatePresence mode='wait'>
          {hidden ? (
            <motion.div
              key='footer-prompt'
              initial={{ x: -200, y: -50, opacity: 0, scale: 0.3 }}
              animate={
                isInView
                  ? { x: 0, y: 0, opacity: 1, scale: 1 }
                  : { x: -200, y: -50, opacity: 0, scale: 0.3 }
              }
              exit={{ x: -200, y: -50, opacity: 0, scale: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: 'backInOut', duration: 0.65 }}
              className='border py-1 px-2 rounded-full h-full'
            >
              <strong>🤔 Did you know?</strong>
            </motion.div>
          ) : (
            <motion.div
              key='footer-link'
              initial={{ x: 200, y: -50, opacity: 0, scale: 0.3 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              exit={{ x: 200, y: -50, opacity: 0, scale: 0.3 }}
              transition={{ ease: 'backInOut', duration: 0.65 }}
              className='flex items-center gap-2 text-sm py-1 px-2 h-full'
            >
              <p>
                <a
                  className='text-primary_C border p-2 rounded-full'
                  href='https://motion.dev/'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={e => e.stopPropagation()}
                >
                  Motion for React
                </a>{' '}
                is the only animation library used on this page!
              </p>
              <picture>
                <source
                  srcset='https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.webp'
                  type='image/webp'
                />
                <img
                  src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif'
                  alt='🤯'
                  width='32'
                  height='32'
                />
              </picture>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Separator className='max-w-prose' />
      <div className='flex flex-col sm:flex-row items-center gap-2'>
        <p>
          Thanks so much for checking out my site! Reach out & let's build
          something interesting.
        </p>
        <Button variant='outline' onClick={handleClick} className='group'>
          <ArrowUp className='group-hover:text-primary_C' />
          &nbsp;Home
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
