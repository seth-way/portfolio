import Img from '@/components/ui/img';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { IProject } from '@/assets/resume-info/resumeTypes';

interface IProps {
  project: IProject;
  handleClick: (proj: IProject) => void;
}

const Project = ({ project, handleClick }: IProps) => {
  const { title, description, tech } = project;
  return (
    <motion.div
      className='w-[min(250px,90vw)] aspect-[2/3]'
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
        <CardContent className='h-2/3 w-full flex flex-wrap-reverse items-center justify-center gap-x-2 gap-y-0 align-baseline'>
          {tech.map((type: string, idx: number) => (
            <Img
              imgName={type}
              folder='tech'
              type='svg'
              svgProp={{ width: 50, height: 50 }}
              key={`project_${title}_${idx}`}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Project;
