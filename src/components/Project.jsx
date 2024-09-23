import Img from '@/components/ui/img';
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import badges from '@/assets/resume-info/badges.json';

const badgeURL = 'https://img.shields.io/badge/';

const Project = ({ project, handleClick }) => {
  const { title, description, tech } = project;
  return (
    <motion.div
      className='w-[min(250px,90vw)] aspect-[2/3] group hover:cursor-pointer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring' }}
      onClick={() => handleClick(project)}
      aria-label={`More info about ${project} project`}
    >
      <Card className='w-full h-full relative'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className='line-clamp-3'>
            {description}
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardFooter className='h-2/3 w-full flex flex-wrap items-center justify-center gap-4 p-4'>
          {tech.map((type, idx) =>
            badges[type] ? (
              <img
                className='opacity-70 group-hover:opacity-100'
                src={`${badgeURL}${badges[type]}`}
                alt={`${type} logo badge`}
                key={`project_${title}_${idx}`}
              />
            ) : (
              ''
            )
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Project;
