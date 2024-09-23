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

const Content = ({ type, project }) => {
  const { title, description, short } = project;
  return type === 'dialog' ? (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader className='space-y-4'>
        <DialogTitle className='text-center'>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <Img imgName={short} folder='projects' type='gif' />
      </DialogHeader>
    </DialogContent>
  ) : (
    <DrawerContent>
      <DrawerHeader className='text-left space-y-4'>
        <DrawerTitle className='text-center'>{title}</DrawerTitle>
        <DrawerDescription>{description}</DrawerDescription>
        <Img imgName={short} folder='projects' type='gif' />
      </DrawerHeader>
      <DrawerFooter className='pt-2'>
        <DrawerClose asChild>
          <Button variant='outline'>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default Content;
