import { useState, useEffect } from 'react';
import Steps from '@/components/misc/svgs/Steps';
import { trackTraveler } from '@/lib/utils';

const DUR = 100;

const path1 =
  'M20,20 Q50,10 80,20 Q95,60 125,30 T170,35 Q290,10 260,100 T180,140 Q150,120 160,140 T130,140 Q100,150 90,160 T40,135 Q30,90 20,100 T50,100 Q60,90 30,40Z';
const path2 =
  ' M250,130 Q220,160 200,140 T150,150 Q150,160 100,140 T50,150 T30,160 Q30,130 40,100 T25,45 T50,40 Q50,50 100,30 T150,35 Q190,35 200,15 T280,60 Q270,65 270,150Z';

export default function Map({ isOpen }) {
  const [stepData, setStepData] = useState([[], []]);

  useEffect(() => {
    const svg = document.getElementById('steps');
    if (svg) {
      const paths = document.querySelectorAll('[id^="walking-path-"]');
      const steps = Array.from(paths).map(path => trackTraveler(path, DUR));
      setStepData(steps);
    } else {
      console.warn('SVG with id "steps" not found.');
    }
  }, []);

  return (
    <div className='relative h-full w-full flex items-center justify-center border-2 border-[#330000] rounded-xl'>
      <svg
        id='steps'
        className='absolute'
        viewBox='0 0 300 200'
        height='100%'
        strokeOpacity='0.4'
      >
        <defs>
          <path
            id='stones1'
            d='M10,10 Q15,5 20,10 T30,20 Q25,25 20,20 T10,10 Z 
			M35,10 Q40,5 45,10 T50,20 Q45,25 40,20 T35,10 Z'
            fill='#A27A3D'
            stroke='#330000'
            strokeWidth='1'
            strokeOpacity='0.1'
            fillOpacity='0.2'
          />

          <path
            id='stones2'
            d='M20,30 Q25,25 30,30 T40,40 Q35,45 30,40 T20,30 Z
			M45,35 Q50,30 55,35 T60,45 Q55,50 50,45 T45,35 Z'
            fill='#A27A3D'
            stroke='#330000'
            strokeWidth='1'
            strokeOpacity='0.1'
            fillOpacity='0.2'
          />

          <path
            id='stones3'
            d='M50,50 Q55,45 60,50 T70,60 Q65,65 60,60 T50,50 Z
			M75,55 Q80,50 85,55 T90,65 Q85,70 80,65 T75,55 Z
			M95,60 Q100,55 105,60 T110,70 Q105,75 100,70 T95,60 Z'
            fill='#A27A3D'
            stroke='#330000'
            strokeWidth='1'
            strokeOpacity='0.1'
            fillOpacity='0.2'
          />
          <path
            id='stones4'
            d='M10,80 Q15,75 20,80 T30,90 Q25,95 20,90 T10,80 Z
			M35,85 Q40,80 45,85 T50,95 Q45,100 40,95 T35,85 Z
			M25,105 Q30,100 35,105 T40,115 Q35,120 30,115 T25,105 Z'
            fill='#A27A3D'
            stroke='#330000'
            strokeWidth='1'
            strokeOpacity='0.1'
            fillOpacity='0.2'
          />
        </defs>
        <use href='#stones1' x='20' y='20' />
        <use href='#stones2' x='70' y='40' />
        <use href='#stones3' x='120' y='70' />
        <use href='#stones4' x='170' y='100' />

        <use href='#stones1' x='220' y='130' transform='rotate(90 50 50)' />
        <use href='#stones2' x='250' y='153' transform='rotate(-90 50 50)' />
        <use href='#stones3' x='50' y='101' transform='rotate(180 50 50)' />
        <use href='#stones4' x='100' y='153' transform='rotate(90 50 50)' />

        <use href='#stones1' x='150' y='32' transform='rotate(90 50 50)' />
        <use href='#stones2' x='200' y='15' transform='rotate(-90 50 50)' />
        <use href='#stones3' x='90' y='170' transform='rotate(185 40 170)' />
        <use href='#stones4' x='210' y='150' transform='rotate(90 50 50)' />
        <path
          id='walking-path-1'
          d={path1}
          stroke='purple'
          fill='none'
          strokeWidth='0'
        />
        <path
          id='walking-path-2'
          d={path2}
          stroke='green'
          fill='none'
          strokeWidth='0'
        />
        {isOpen && <Steps stepData={stepData[0]} label='Harry' />}
        {isOpen && <Steps stepData={stepData[1]} label='Snape' />}
      </svg>

      <div className='w-1/2 h-1/5 rounded bg-[#A27A3D] border-2 border-[#330000] z-40'>
        <p className='text-xs p-1 leading-tight'>
          I Solemnly Swear that I am up to No Good
        </p>
      </div>
    </div>
  );
}
