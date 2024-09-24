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
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Separator } from '@/components/ui/separator';


const co_contributors = '@/assets/resume-info/co_contributors.json'

const Content = ({ type, project }) => {
  const { title, short, description, contributors, tech, notes, links } = project;

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
        <TableBody>
          {notes.map((note, i) => (
            <TableRow key={`note-${i}`}><TableCell>{note}</TableCell></TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <></>
    );

  const displayLinks = links =>
    Object.keys(links).length ? (
      <div id='project-links'>
        <h3>Links</h3>
        <ul>
          {links.live && (
            <li>
              <a
                href={links.live}
                target='_blank'
                rel='noreferrer'
                aria-label={`Visit a live demo of this project`}
              >
                live link
              </a>
            </li>
          )}
          {links.live && links.repo && <li>·</li>}
          {links.repo && (
            <li>
              <a
                href={links.repo}
                target='_blank'
                rel='noreferrer'
                aria-label={`See the github repo for this project`}
              >
                code repo
              </a>
            </li>
          )}
        </ul>
      </div>
    ) : (
      <></>
    );

  const displayContributor = contributor => {
    if (!co_contributors[contributor]) return <li>{contributor}</li>;
    const github = `https://github.com/${co_contributors[contributor]}`;
    return (
      <li>
        <a
          href={github}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${contributor}'s GitHub profile`}
        >
          {contributor}
        </a>
      </li>
    );
  };

  const displayContributors = contributors =>
    contributors.length ? (
      <div id='project-contributors'>
        <h3>Contributors</h3>
        <ul>
          {contributors.map(contributor => displayContributor(contributor))}
        </ul>
      </div>
    ) : (
      <></>
    );

  return type === 'dialog' ? (
    <div>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader className='space-y-4 p-4'>
          <DialogTitle className='text-center'>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Img imgName={short} folder='projects' type='gif' />
        <ScrollArea>
        {/* {tech && displayTech(tech)} */}
        {notes && displayNotes(notes)}
        {links && displayLinks(links)}
        {contributors && displayContributors(contributors)}</ScrollArea>
      </DialogContent>
    </div>
  ) : (
    <>
      <DrawerContent className="h-screen">
        <DrawerHeader className='text-left space-y-4 p-4'>
          <DrawerTitle className='text-center'>{title}</DrawerTitle>
        </DrawerHeader>
        <Separator/>
        <ScrollArea orientation="vertical" className="h-max w-full overflow-y-auto px-4">
        <DrawerDescription>{description}</DrawerDescription>
        <Img imgName={short} folder='projects' type='gif' />

        {/* {tech && displayTech(tech)} */}
        {notes && displayNotes(notes)}
        {links && displayLinks(links)}
        {contributors && displayContributors(contributors)}
        </ScrollArea>
        <Separator/>
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
