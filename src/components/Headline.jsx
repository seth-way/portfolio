import { interpolate } from "flubber";
import React, { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
//import useFlubber from '@/lib/hooks/use-flubber';
//import { getIndex } from '@/lib/utils';

// const pathLine =
//   'm3,19 l42,0 l2.5,0 l2.5,0 l46,0 s3,1 0,2 l-42,0 l-2.5,0 l-2.5,0 l-46,0 s-3,-1 0,-2';
// const pathMiddle =
//   'm0,20 l2,-1 l43,0 l8,-9 l-3,9 l48,0 l2,1 l-2,1 l-43,0 l-8,9 l3,-9 l-48,0 l-2,-1z';
// const pathBolt =
//   'm20,19 q 25,-1 37,-9 l-8,12 l29,-3 s3,1 0,2 q -25,1 -37,9l8,-12 l-29,3 s-3,-1 0,-2';
//const paths = [pathLine, pathMiddle, pathBolt, pathMiddle, pathLine];
// const paths = [pathLine, pathBolt, pathLine];
const Headline = ({ firstName }) => {
  // const [pathIndex, setPathIndex] = useState(-1);
  // const progress = useMotionValue(pathIndex);
  // const path = useFlubber(progress, paths);

  // useEffect(() => {
  //   if (pathIndex > -1) {
  //     const animation = animate(progress, pathIndex, {
  //       duration: 0.25,
  //       ease: 'linear',
  //       onComplete: () => {
  //         if (pathIndex < paths.length - 1) {
  //           setPathIndex(pathIndex + 1);
  //         }
  //       },
  //     });
  //     return () => {
  //       animation.stop();
  //     };
  //   }
  // }, [pathIndex]);

  // useEffect(() => {
  //   setPathIndex(0);
  // }, []);

  return (
    <div id="headline" className="flex items-center justify-center font-bold">
      <h1 className="uppercase text-8xl tracking-wide relative">
        <span className="skew-x-[-20deg] opacity-0">{firstName}</span>
        <span className="absolute top-only">{firstName}</span>
        <span data-content={firstName} className="absolute bottom-only">{firstName}</span>
      </h1>
      <svg
        id="headline-svg"
        viewBox="0 0 100 40"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="500px"
        height="125px"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        // onClick={() => setPathIndex(0)}
        className="absolute"
      >
        <motion.ellipse
          cx="5"
          cy="20"
          rx="3.5"
          ry="1.1"
          fill="var(--primary_C)"
        />
        <motion.rect
          x="5"
          y="19"
          width="90"
          height="2"
          fill="var(--primary_C)"
        />
        <motion.ellipse
          cx="95"
          cy="20"
          rx="3.5"
          ry="1.1"
          fill="var(--primary_C)"
        />

        {/* <motion.path
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 2 }}
        d={path}
        fill='var(--primary_C)'
        strokeWidth={1}
      /> */}
      </svg>
    </div>
  );
};

export default Headline;
