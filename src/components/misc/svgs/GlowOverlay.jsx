import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ui/theme-provider';


export default function GlowOverlay({ isOpen, x, y }) {
  const [circleInfo, setCirleInfo] = useState({
    circleX: 150,
    circleY: 100,
    circleR: 0,
  });
  const [mode, setMode] = useState('dark');
  const { theme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  useEffect(() => {
    const calculateCircle = () => {
      const isHovered = x && y;
      const [circleX, circleY] = isHovered ? [x, y] : [150, 100];
      const circleR = isHovered && isOpen ? 70 : isHovered ? 40 : 0;

      return { circleX, circleY, circleR };
    };
    setCirleInfo(calculateCircle());
  }, [x, y]);

  const { circleX, circleY, circleR } = circleInfo;

  return (
    <div
      className='absolute inset-0 pointer-events-auto z-[34]'
    >
      <svg
        className='absolute inset-0 z-[34]'
        viewBox='0 0 300 200'
        height='100%'
        width='100%'
      >
        <defs>
          <radialGradient
            id='overlay-gradient'
            cx='50%'
            cy='50%'
            r='50%'
            fx='50%'
            fy='50%'
          >
            <stop offset='0%' stopColor='black' />
            <stop offset='100%' stopColor='white' />
          </radialGradient>
          <mask id='overlay-mask' x='0' y='0' height='100%' width='100%'>
            <rect x='0' y='0' width='100%' height='100%' fill='white' />
            <circle
              cx={circleX}
              cy={circleY}
              r={circleR}
              fill='url(#overlay-gradient)'
            />
          </mask>
        </defs>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          mask='url(#overlay-mask)'
          fillOpacity='1'
          fill={mode === 'dark' ? '#08080a' : 'white'}
        />
      </svg>
    </div>
  );
}
