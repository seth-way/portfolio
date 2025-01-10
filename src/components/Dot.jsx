// import { useState, useEffect, useRef } from 'react';

// const MIN_DIST = 5;
// const MID_DIST = 50;
// const MAX_DIST = 90;

// export default function Dot({ x, y }) {
//   const parentRef = useRef(null);
//   const centerRef = useRef({ x: 0, y: 0 });
//   const [xPos, setXPos] = useState([5, 5]);
//   const [yPos, setYPos] = useState([5, 5]);
//   const delay = useRef(Math.random() + 0.01);

//   const updateCenter = () => {
//     if (parentRef.current) {
//       const rect = parentRef.current.getBoundingClientRect();
//       centerRef.current = {
//         x: rect.left + rect.width / 2,
//         y: rect.top + rect.height / 2,
//       };
//     }
//   };

//   useEffect(() => {
//     updateCenter();
//     window.addEventListener('resize', updateCenter);
//     return () => window.removeEventListener('resize', updateCenter);
//   }, []);

//   useEffect(() => {
//     if (centerRef.current && x && y) {
//       const deltaX = x - centerRef.current.x;
//       const deltaY = y - centerRef.current.y;
//       const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

//       let length = 0;
//       if (distance > MIN_DIST && distance < MAX_DIST) {
//         if (distance < MID_DIST) {
//           length = (distance - MIN_DIST) / (MID_DIST - MIN_DIST);
//         } else {
//           length = (distance - MAX_DIST) / (MID_DIST - MAX_DIST);
//         }
//       }

//       if (length) {
//         const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//         const offsetX = Math.cos((angle * Math.PI) / 180) * length * 3.5;
//         const offsetY = Math.sin((angle * Math.PI) / 180) * length * 3.5;
//         setXPos([5 - offsetX, 5 + offsetX]);
//         setYPos([5 - offsetY, 5 + offsetY]);
//         delay.current = 0;
//       } else {
//         setXPos([5, 5]);
//         setYPos([5, 5]);
//         if (!delay.current) delay.current = Math.random() + 0.01;
//       }
//     }
//   }, [x, y]);

//   return (
//     <div ref={parentRef} className='w-4 h-4'>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         width='100%'
//         height='100%'
//         viewBox='0 0 10 10'
//         style={{
//           transition:
//             'x1 0.05s ease-in-out, y1 0.05s ease-in-out, x2 0.05s ease-in-out, y2 0.05s ease-in-out',
//         }}
//       >
//         <line
//           x1={xPos[0]}
//           y1={yPos[0]}
//           x2={xPos[1]}
//           y2={yPos[1]}
//           stroke='currentColor'
//           strokeWidth='1'
//           strokeLinecap='round'
//           style={
//             delay.current
//               ? {
//                   opacity: 0.3,
//                   animation: `dots 1s ease-in-out ${delay.current}s infinite alternate`,
//                 }
//               : { opacity: 0.3 }
//           }
//           //opacity={0.15 + 0.2}
//         />
//       </svg>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from 'react';

const MIN_DIST = 5;
const MID_DIST = 50;
const MAX_DIST = 90;

export default function Dot({ x, y }) {
  const parentRef = useRef(null);
  const centerRef = useRef({ x: 0, y: 0 });
  const [xPos, setXPos] = useState([5, 5]);
  const [yPos, setYPos] = useState([5, 5]);
  const delay = useRef(Math.random() + 0.01); // Mutable value, doesn't need to trigger renders

  const updateCenter = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
  };

  useEffect(() => {
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => {
      window.removeEventListener('resize', updateCenter);
    };
  }, []);

  useEffect(() => {
    if (centerRef.current && x && y) {
      const deltaX = x - centerRef.current.x;
      const deltaY = y - centerRef.current.y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      let length = 0;
      if (distance > MIN_DIST && distance < MAX_DIST) {
        if (distance < MID_DIST) {
          length = (distance - MIN_DIST) / (MID_DIST - MIN_DIST);
        } else {
          length = (distance - MAX_DIST) / (MID_DIST - MAX_DIST);
        }
      }

      if (length) {
        const angle = Math.atan2(deltaY, deltaX);
        const offsetX = Math.cos(angle) * length * 3.5;
        const offsetY = Math.sin(angle) * length * 3.5;

        setXPos([5 - offsetX, 5 + offsetX]);
        setYPos([5 - offsetY, 5 + offsetY]);
        delay.current = 0;
      } else {
        setXPos([5, 5]);
        setYPos([5, 5]);
        if (!delay.current) {
          delay.current = Math.random() + 0.01;
        }
      }
    }
  }, [x, y]);

  return (
    <div ref={parentRef} className='w-4 h-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 10 10'
      >
        <line
          x1={xPos[0]}
          y1={yPos[0]}
          x2={xPos[1]}
          y2={yPos[1]}
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          style={
            delay.current
              ? {
                  opacity: 0.3,
                  animation: `dots 1s ease-in-out ${delay.current}s infinite alternate`,
                }
              : { opacity: 0.3 }
          }
        />
      </svg>
    </div>
  );
}
