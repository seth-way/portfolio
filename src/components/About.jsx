import { useEffect, useRef } from 'react';
import headShot from '@/assets/images/headShot.jpg';
import background from '@/assets/resume-info/background.json';
import resume from '@/assets/resume.pdf';
const { fullName, bio, email, phone, address } = background;
const { city, state } = address;
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import { ClipboardCopy, File } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    const { current } = ref;
    if (current) {
      const handleScroll = () => {
        current.style.setProperty(
          '--from',
          ((window.scrollY / 2) % 360) + 'deg'
        );
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleClick = e => {
    navigator.clipboard.writeText(e.currentTarget.innerText);
    e.currentTarget.focus();
  };

  return (
    <Card
      id='about'
      className='section-card px-4 py-8 flex flex-col items-center justify-center gap-8'
      ref={ref}
    >
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div
          id='profile-pic-border'
          className='w-[min(50vh,50vw)] min-w-124 max-w-80'
        >
          <img id='profile-pic' src={headShot} alt='profile headshot of dev' />
        </div>
        <section className='flex flex-col items-center'>
          <h2 className='mb-4'>About Me</h2>
          <p className='max-w-sm'>{bio}</p>
        </section>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <section className='flex flex-col text-md md:text-base items-center'>
          <h3 className='mb-4 font-bold text-xl text-center text-nowrap w-fit'>
            Contact Details
          </h3>
          <p className='ms-12'>
            phone:{' '}
            <Button
              className='group inline-flex gap-4'
              variant='ghost'
              onClick={handleClick}
            >
              {phone}
              <ClipboardCopy className='text-transparent group-hover:text-primary_C' />
            </Button>
          </p>
          <p>
            address:{' '}
            <b className='ps-4'>
              {city}, {state}
            </b>
          </p>
          <p className='ms-12 text-nowrap'>
            email:{' '}
            <Button
              className='group inline-flex gap-4'
              variant='ghost'
              onClick={handleClick}
            >
              {email}
              <ClipboardCopy className='text-transparent group-hover:text-primary_C' />
            </Button>
          </p>
        </section>
        <section>
          <a
            href={resume}
            download
            aria-label={`Download ${fullName}'s resume`}
          >
            <Button variant='outline' className='w-full h-full text-primary'>
              <File className='text-primary' />
              Download Resume
            </Button>
          </a>
        </section>
      </div>
    </Card>
  );
};

export default About;
