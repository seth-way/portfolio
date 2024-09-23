import { useState } from 'react';
//import Project from '@/components/Project';
import Content from '@/components/Content';
// import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
// import { Button } from '@/components/ui/button';
import {
  Dialog,
  // DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  // DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  // DrawerClose,
  // DrawerContent,
  // DrawerDescription,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerTitle,
} from '@/components/ui/drawer';
import { Card } from '@/components/ui/card';
//import projects from '@/assets/resume-info/projects.json';

const blankProject = {
  title: '',
  short: '',
  description: '',
  contributors: [],
  tech: [],
  notes: [],
  links: {
    repo: '',
    live: '',
  },
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currentProject, setProject] = useState({ ...blankProject });
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // const handleClick = (project: IProject) => {
  //   setProject(() => project);
  //   setOpen(true);
  // };

  // const { title, short, description, contributors, tech, notes, links } =
  //   currentProject;

  return (
    <Card
      id='projects'
      className='section-card px-4 py-8 flex flex-col items-center justify-center gap-8'
    >
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <h2>Projects</h2>
          <div className='flex flex-wrap align-center justify-center gap-4'>
            {/* {projects.map((project, idx) => (
              <Project
                //project={project}
                key={`project_${idx}`}
                handleClick={handleClick}
              />
            ))} */}
          </div>
          <Content type='dialog' project={currentProject} />
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <h2 className='uppercase'>Projects</h2>
          <div className='flex flex-wrap align-center justify-center gap-4'>
            {/* {projects.map((project, idx) => (
              <Project
                project={project}
                key={`project_${idx}`}
                handleClick={handleClick}
              />
            ))} */}
          </div>
          <Content type='drawer' project={currentProject} />
        </Drawer>
      )}
    </Card>
  );
};

export default Projects;
