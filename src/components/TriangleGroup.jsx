import { useEffect, useRef } from 'react';
import Triangle from '@/components/Triangle';

const TriangleGroup = ({ width, height, row, col, depth }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.height = height + 'px';
      ref.current.style.width = width + 'px';
    }
  }, [ref]);
  //const rotation = [0, 120, 240][Math.floor(Math.random() * 3)];
  const attributes = depth
    ? {}
    : {
        fill: 'none',
        strokeWidth: '1',
        strokeLinecap: 'round',
        stroke: 'currentColor',
      };
  console.log('row', row);
  console.log('col', col);
  return (
    <div className='h-full border border-solid border-thin border-pink-500'>
      <Triangle height={height / 2} width={width / 2} />
      <Triangle />
      <Triangle />
    </div>
  );
};

export default TriangleGroup;
