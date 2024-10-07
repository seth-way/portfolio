import { Button } from './button';

export default function NavButton({ link, currentLink, handleClick }) {
  const class1 = 'bg-transparent absolute text-primary_C font-medium bottom-0';
  const class2 =
    'bg-transparent transition-[height] duration-1000 ease-in-out origin-bottom absolute font-medium  bottom-0';
  const currentClass1 =
    'bg-transparent absolute text-primary_C font-semibold bottom-0';
  const currentClass2 =
    'bg-transparent transition-[height] duration-1000 ease-in-out origin-top absolute font-semibold bottom-0 max-h-0';
  return (
    <Button variant='ghost' onClick={handleClick} value={link}>
      <div className='nav-btn bg-transparent uppercase relative h-5 w-max overflow-hidden'>
        <p className='text-transparent bg-transparent font-medium'>{link}</p>
        <p className={link === currentLink ? currentClass1 : class1}>{link}</p>
        <p className={link === currentLink ? currentClass2 : class2}>{link}</p>
      </div>
    </Button>
  );
}
