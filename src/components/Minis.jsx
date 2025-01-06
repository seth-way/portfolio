import { Card } from '@/components/ui/card';
import Item from '@/components/ui/misc-item';
import Airborne from '@/components/misc/Airborne';
import Joke from '@/components/misc/Joke';
import Slideshow from '@/components/misc/Slideshow';
import Algorithms from '@/components/misc/Algorithms';

const items = [<Joke />, <Algorithms />, <Airborne />, <Slideshow />];

const Minis = () => {
  return (
    <Card
      id='mini·apps'
      className='section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden'
    >
      <h2>Mini Apps</h2>
      <div className='flex items-center overflow-x-scroll md:overflow-x-auto overflow-y-hidden md:justify-center md:flex-wrap max-w-full gap-4 p-4'>
        {items.map((item, idx) => (
          <Item key={`minis-${idx}`}>{item}</Item>
        ))}
      </div>
    </Card>
  );
};

export default Minis;
