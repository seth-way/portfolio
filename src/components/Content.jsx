import Img from '@/components/ui/img';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

import co_contributors from '@/assets/resume-info/co_contributors.json';

const Content = ({ type, project }) => {
  const { title, short, description, contributors, tech, notes, links } =
    project;

  const displayTech = tech =>
    tech.length ? (
      <div id='project-tech'>
        <h3>Tech</h3>
        <ul>
          {tech.map((type, i) => (
            <li key={`${i}-${type}`}>
              <IMG
                folder='tech'
                filename={`${type}.svg`}
                alt={`${type} badge logo`}
              />
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <></>
    );

  const displayNotes = notes =>
    notes.length ? (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>Project Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.map((note, i) => (
            <TableRow key={`note-${i}`}>
              <TableCell>&#183; {note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <></>
    );

  const displayLinks = links =>
    Object.keys(links).length ? (
      <div id='project-links'>
        <h3 className='text-center'>Links</h3>
        <div className='flex gap-4 align-center justify-center my-4'>
          {links.live && (
            <a
              href={links.live}
              target='_blank'
              rel='noreferrer'
              aria-label={`Visit a live demo of this project`}
            >
              <Button variant='outline'>live link</Button>
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target='_blank'
              rel='noreferrer'
              aria-label={`See the github repo for this project`}
            >
              <Button variant='outline'>code repo</Button>
            </a>
          )}
        </div>
      </div>
    ) : (
      <></>
    );

  const displayContributor = contributor => {
    if (!co_contributors[contributor])
      return <Badge variant='outline'>{contributor}</Badge>;
    const github = `https://github.com/${co_contributors[contributor]}`;
    return (
      <a
        href={github}
        target='_blank'
        rel='noreferrer'
        aria-label={`Visit ${contributor}'s GitHub profile`}
      >
        <Badge variant='secondary'>{contributor}</Badge>
      </a>
    );
  };

  const displayContributors = contributors =>
    contributors.length ? (
      <div id='project-contributors'>
        <h3 className='text-center'>Co-Contributors</h3>
        <div className='flex flex-wrap items-center justify-center gap-2 my-4'>
          {contributors.map(contributor => displayContributor(contributor))}
        </div>
      </div>
    ) : (
      <></>
    );

  return type === 'dialog' ? (
    <div>
      <DialogContent className='sm:max-w-[525px] h-[90%]'>
        <DialogHeader className='space-y-4 p-4'>
          <DialogTitle className='text-center'>{title}</DialogTitle>
        </DialogHeader>
        <Separator />
        <ScrollArea
          orientation='vertical'
          className='w-full px-4 overflow-y-auto'
        >
          <DialogDescription className='my-2'>{description}</DialogDescription>
          <div className='w-full flex justify-center'>
            <Img imgName={short} folder='projects' type='gif' />
          </div>

          {/* {tech && displayTech(tech)} */}
          {notes && displayNotes(notes)}
          {links && displayLinks(links)}
          {contributors && displayContributors(contributors)}
        </ScrollArea>
      </DialogContent>
    </div>
  ) : (
    <>
      <DrawerContent className='h-screen'>
        <DrawerHeader className='text-left space-y-4 p-4'>
          <DrawerTitle className='text-center'>{title}</DrawerTitle>
        </DrawerHeader>
        <Separator />
        <ScrollArea
          orientation='vertical'
          className='h-full overflow-y-auto w-full px-4'
        >
          <DrawerDescription className='my-4'>{description}</DrawerDescription>
          <div className='w-full flex justify-center'>
            <Img imgName={short} folder='projects' type='gif' />
          </div>

          {/* {tech && displayTech(tech)} */}
          {notes && displayNotes(notes)}
          {links && displayLinks(links)}
          {contributors && displayContributors(contributors)}
        </ScrollArea>
        <Separator />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </>
  );
};

export default Content;
