import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import headShot from '@/assets/images/headShot.jpg';
//
export default function ProfilePic() {
  const { scrollY } = useScroll();
  //const [rotation, setRotation] = useState(0);

  const rotation1 = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const rotation2 = useSpring(scrollY, {
    stiffness: 140,
    damping: 180,
    mass: 0.6,
  });

  const rotation2R = useTransform(rotation2, value => -value);

  const rotation3 = useSpring(scrollY, {
    stiffness: 500,
    damping: 200,
    mass: 0.9,
  });

  const rotation4 = useSpring(scrollY, {
    stiffness: 600,
    damping: 150,
    mass: 0.3,
  });

  const rotation4R = useTransform(rotation4, value => -value);

  return (
    <div
      id='profile-pic-border'
      className='w-[min(50vh,50vw)] min-w-124 max-w-80 aspect-square relative'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 300 300'
        className='absolute inset-0'
      >
        <defs>
          <clipPath id='circleClip'>
            <circle cx='150' cy='150' r='120' />
          </clipPath>
        </defs>
        <image
          x='0'
          y='0'
          height='100%'
          width='100%'
          id='profile-pic'
          xlinkHref={headShot}
          alt='Headshot of developer who made this page'
          clipPath='url(#circleClip)'
          preserveAspectRatio='xMidYMid slice'
        ></image>
        <circle
          cx='150'
          cy='150'
          r='140'
          stroke='currentColor'
          fill='none'
          strokeWidth='12'
          opacity={0.3}
        />
      </svg>
      <motion.div className='absolute inset-0' style={{ rotate: rotation1 }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 300 300'
          height='100%'
          width='100%'
        >
          <defs>
            <linearGradient id='grad1' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='0%'
                style={{ stopColor: 'var(--alt_C)', stopOpacity: 0 }}
              />
              <stop
                offset='45%'
                style={{ stopColor: 'var(--alt_C)', stopOpacity: 0.75 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--alt_C)', stopOpacity: 0.75 }}
              />
            </linearGradient>
          </defs>
          <path
            d='M10,150 A140,140 0 0,0 290,150'
            fill='none'
            stroke='url(#grad1)'
            strokeWidth='12'
            strokeLinecap='round'
          />
        </svg>
      </motion.div>
      <motion.div className='absolute inset-0' style={{ rotate: rotation2R }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 300 300'
          height='100%'
          width='100%'
        >
          <defs>
            <linearGradient id='grad2' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='0%'
                style={{ stopColor: 'var(--accent_C)', stopOpacity: 0.75 }}
              />
              <stop
                offset='20%'
                style={{ stopColor: 'var(--accent_C)', stopOpacity: 0.75 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--accent_C)', stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          <path
            d='M10,150 A140,140 0 0,1 290,150'
            fill='none'
            stroke='url(#grad2)'
            strokeWidth='12'
            strokeLinecap='round'
          />
        </svg>
      </motion.div>
      <motion.div className='absolute inset-0' style={{ rotate: rotation3 }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 300 300'
          height='100%'
          width='100%'
        >
          <defs>
            <linearGradient id='grad3' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='0%'
                style={{ stopColor: 'var(--primary_C)', stopOpacity: 0 }}
              />
              <stop
                offset='20%'
                style={{ stopColor: 'var(--primary_C)', stopOpacity: 0.75 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--primary_C)', stopOpacity: 0.75 }}
              />
            </linearGradient>
          </defs>
          <path
            d='M290,150 A140,140 0 0,1 10,150'
            fill='none'
            stroke='url(#grad3)'
            strokeWidth='12'
            strokeLinecap='round'
          />
        </svg>
      </motion.div>

      <motion.div className='absolute inset-0' style={{ rotate: rotation4R }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 300 300'
          height='100%'
          width='100%'
        >
          <defs>
            <radialGradient id='grad4' cx='0.9' cy='0.9' r='0.7'>
              <stop
                offset='0%'
                style={{ stopColor: 'var(--secondary_C)', stopOpacity: 0.75 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--secondary_C)', stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>
          <path
            d='M290,150 A140,140 0 0,1 150,290'
            fill='none'
            stroke='url(#grad4)'
            strokeWidth='12'
            strokeLinecap='round'
          />
        </svg>
      </motion.div>
    </div>
  );
}
