import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import RainWaterGrid from '@/components/misc/svgs/RainWaterGrid';
import { getMaxReducer, calculateWater } from '@/lib/algos/rainWater';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RotateCcw } from 'lucide-react';

const elevations = [
  [3, 0, 2, 0, 3, 0, 4, 0, 3, 0, 2, 0],
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0],
  [0, 12, 0, 1, 0, 11, 0, 2, 0, 10, 0, 3],
  [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 0],
  [4, 1, 0, 1, 3, 0, 2, 0, 4, 2, 1, 0],
  [12, 11, 10, 9, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 12, 0, 1, 0, 11, 0, 2, 0, 10, 0, 3],
  [0, 2, 2, 2, 2, 2, 12, 2, 2, 2, 2, 0],
];

const ANIMATION_INTERVAL = 900;

export default function RainWaterDemo({ show }) {
  const [currentGridIndex, setCurrentGridIndex] = useState(0);
  const [waterTrapped, setWaterTrapped] = useState(0);
  const [isRaining, setIsRaining] = useState(false);
  const [waterLevel, setWaterLevel] = useState(-1);
  const [rotation, setRotation] = useState(0);
  const isRainingTimeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const currentGrid = elevations[currentGridIndex];
  const trappedWaterLevels = calculateTrappedWater(currentGrid);
  const expectedWaterVolume = trappedWaterLevels.reduce(
    (acc, val) => acc + val,
    0
  );

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (show) {
      startRainAnimation();
    } else {
      setIsRaining(false);
    }
  }, [show, currentGridIndex]);

  useEffect(() => {}, [currentGridIndex]);

  function calculateTrappedWater(heights) {
    const maxFromLeft = heights.reduce(getMaxReducer(), []);
    const maxFromRight = heights.reduceRight(getMaxReducer(), []).reverse();
    return heights.map((val, idx) =>
      calculateWater(val, maxFromLeft[idx], maxFromRight[idx])
    );
  }

  function calculateCurrentTrapped(level) {
    const trapped = trappedWaterLevels.reduce((total, current, idx) => {
      while (current > 0 && current + currentGrid[idx] > level) {
        current -= 1;
      }
      return total + current;
    }, 0);

    if (trapped === expectedWaterVolume) {
      clearInterval(intervalRef.current);
      isRainingTimeoutRef.current = setTimeout(() => setIsRaining(false), 2000);
    }

    return trapped;
  }

  function startRainAnimation() {
    clearTimeout(isRainingTimeoutRef?.current);
    clearInterval(intervalRef?.current);
    setIsRaining(true);
    setWaterTrapped(0);
    setWaterLevel(-1);
    let currentLevel = -1;
    intervalRef.current = setInterval(() => {
      if (currentLevel < 13) {
        currentLevel++;
        setWaterLevel(currentLevel);
        setWaterTrapped(calculateCurrentTrapped(currentLevel));
      }
    }, ANIMATION_INTERVAL);
  }

  function handleClick() {
    startRainAnimation();
    setRotation(prev => prev - 360);
  }

  return (
    <div className='w-full h-full p-2 flex flex-col items-center justify-between relative'>
      <div className='h-[85%] w-full relative flex items-stretch justify-evenly'>
        <div className='h-full aspect-square border border-[var(--foreground)]'>
          <RainWaterGrid
            elevation={currentGrid}
            waterElevation={trappedWaterLevels}
            waterLevel={waterLevel}
            isRaining={isRaining}
          />
        </div>
        <div className='flex flex-col items-center justify-around h-full overflow-hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='p-1 bg-transparent'>{`Grid: ${
                currentGridIndex + 1
              }`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side='left'
              sideOffset={-54}
              className='min-w-20 w-20'
            >
              <DropdownMenuLabel className='text-wrap text-center'>
                Choose Elevation Grid
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={currentGridIndex}
                onValueChange={setCurrentGridIndex}
              >
                {elevations.map((_, i) => (
                  <DropdownMenuRadioItem value={i} key={`grid-${i}`}>
                    {i + 1}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Tooltip>
            <TooltipTrigger>
              <motion.div
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  rotate: { duration: 1, ease: 'easeInOut' },
                }}
                animate={{ rotate: rotation }}
              >
                <RotateCcw />
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Restart</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className='h-[10%]'>
        <p>
          Water Trapped:{' '}
          <span
            className={waterTrapped ? 'text-[var(--red)] font-extrabold' : ''}
          >
            {waterTrapped}
          </span>
        </p>
      </div>
    </div>
  );
}
