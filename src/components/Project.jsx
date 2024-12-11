import { useState, useEffect, useRef } from 'react';
import Img from '@/components/ui/img';
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useInView from '@/lib/hooks/use-in-view';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import badges from '@/assets/resume-info/badges.json';

const badgeURL = 'https://img.shields.io/badge/';

const Project = ({ project, handleClick }) => {
  const { title, description, tech } = project;
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const ref = useRef(null);
  const isVisible = useInView(ref);

  useEffect(() => {
    if (isVisible && !animate1) {
      setAnimate1(true);
      setTimeout(() => {
        setAnimate2(true);
      }, 500);
    }
  }, [isVisible]);
  return (
    <motion.div
      className='aspect-[2/3] h-[calc(min(250px,90vw)*3/2)] hover:cursor-pointer z-10 group'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring' }}
      onClick={() => handleClick(project)}
      aria-label={`More info about ${project} project`}
      ref={ref}
    >
      <Card className='w-full h-full relative'>
        <CardHeader className='h-1/5'>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <Separator className={`w-0 ${animate1 ? 'animate-expand' : ''}`} />
        <CardDescription className='h-1/4 p-4 border-box !line-clamp-4 overflow-hidden align-baseline text-wrap truncate'>
          {description}
        </CardDescription>
        <Separator className={`mt-4 w-0 ${animate2 ? 'animate-expand' : ''}`} />
        <CardFooter className='w-full h-[55%]'>
          <div className='w-full flex flex-wrap items-center justify-center gap-2 p-2 border-box overflow-hidden'>
            {tech.map((type, idx) =>
              badges[type] ? (
                <img
                  className='opacity-70 group-hover:opacity-100 max-w-[46%]'
                  src={`${badgeURL}${badges[type]}`}
                  alt={`${type} logo badge`}
                  key={`project_${title}_${idx}`}
                />
              ) : (
                ''
              )
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Project;
