import { useEffect, useRef } from 'react';

const Hex = ({ width, height }) => {
  const ref = useRef(null);
  const delay = Math.floor(Math.random() * 50) / 40;
  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      current.style.setProperty('--delay', delay + 's');
    }
  }, [width, height, delay]);

  return (
    <svg
      className='hex-svg'
      width={height.toString()}
      height={width.toString()}
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
    >
      <path
        stroke='currentColor'
        fill='none'
        d='M 50,10 L 90,30 L 90,70 L 50,90 L 10,70 L 10,30 Z'
        strokeWidth='4'
      />
      <path
        strokeWidth='4'
        stroke='currentColor'
        fill='none'
        d='M 50,20 L 80,35 L 80,65 L 50,80 L 20,65 L 20,35 Z'
      />
      <path
        strokeWidth='4'
        stroke='currentColor'
        fill='none'
        d='M 50,30 L 70,40 L 70,60 L 50,70 L 30,60 L 30,40 Z'
      />
    </svg>
  );
};

export default Hex;
