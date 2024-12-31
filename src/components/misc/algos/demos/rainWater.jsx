import { useState, useEffect, useRef } from 'react';
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
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { RotateCcw } from 'lucide-react';

const elevations = [
	[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], // Expected: 6
	[0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0], // Expected: 0
	[12, 11, 10, 9, 5, 0, 0, 0, 0, 0, 0, 0], // Expected: 0
	[6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 0], // Expected: 5
	[4, 1, 0, 1, 3, 0, 2, 0, 4, 2, 1, 0], // Expected: 10
	[3, 0, 2, 0, 3, 0, 4, 0, 3, 0, 2, 0], // Expected: 12
	[0, 12, 0, 1, 0, 11, 0, 2, 0, 10, 0, 3], // Expected: 27
	[0, 2, 2, 2, 2, 2, 12, 2, 2, 2, 2, 0] // Expected: 0
];

const ANIMATION_INTERVAL = 900;

export default function rainWaterDemo({ show }) {
	const [elevationIdx, setElevationIdx] = useState(0);
	const [elevation, setElevation] = useState([...elevations[elevationIdx]]);
	const [waterElevation, setWaterElevation] = useState([]);
	const [waterTrapped, setWaterTrapped] = useState(0);
	const [isRaining, setIsRaining] = useState(false);
	const [waterLevel, setWaterLevel] = useState(-1);
	const waterLevelRef = useRef(-1);
	const intervalRef = useRef(null);

	useEffect(
		() => () => {
			clearInterval(intervalRef.current);
		},
		[]
	);

	useEffect(() => {
		if (show) animate();
		else setIsRaining(false);
	}, [show]);

	useEffect(() => {
		const newElevation = [...elevations[elevationIdx]];
		setElevation(newElevation);
		calculateRainWater(newElevation);
		animate();
	}, [elevationIdx]);

	function calculateRainWater(heights) {
		const maxFromLeft = heights.reduce(getMaxReducer(), []);
		const maxFromRight = heights.reduceRight(getMaxReducer(), []).reverse();
		const waterHeights = heights.map((val, idx) =>
			calculateWater(val, maxFromLeft[idx], maxFromRight[idx])
		);

		setWaterElevation(waterHeights);
	}

	function animate() {
		setIsRaining(true);
		setWaterTrapped(0);
		setWaterLevel(-1);
		clearInterval(intervalRef.current);
		waterLevelRef.current = -1;

		intervalRef.current = setInterval(() => {
			if (waterLevelRef.current < 13) {
				setWaterLevel(prev => {
					const nextLevel = prev + 1;
					waterLevelRef.current = nextLevel;
					return nextLevel;
				});
			} else {
				clearInterval(intervalRef.current);
				setIsRaining(false);
			}
		}, ANIMATION_INTERVAL);
	}

	function handleElevationChange(val) {
		setElevationIdx(val);
	}

	function handleRewind() {
		animate();
	}

	return (
		<div className="w-full h-full p-2 flex flex-col items-center justify-between relative">
			<div className="h-[85%] w-full relative flex items-stretch justify-evenly">
				<div className="h-full aspect-square border border-[var(--foreground)]">
					<RainWaterGrid
						elevation={elevation}
						waterElevation={waterElevation}
						waterLevel={waterLevel}
						isRaining={isRaining}
					/>
				</div>
				<div className="flex flex-col items-center justify-around h-full overflow-hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="p-1">{`Grid: ${elevationIdx + 1}`}</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="left" sideOffset={-54} className="min-w-20 w-20">
							<DropdownMenuLabel className="text-wrap text-center">
								Choose Elevation Grid
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup value={elevationIdx} onValueChange={handleElevationChange}>
								{elevations.map((_, i) => (
									<DropdownMenuRadioItem value={i} key={`elevation-selector-${i}`}>
										{i + 1}
									</DropdownMenuRadioItem>
								))}
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
					<Tooltip>
						<TooltipTrigger>
							<RotateCcw onClick={handleRewind} />
						</TooltipTrigger>
						<TooltipContent>
							<p>restart</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
			<div className="h-[10%]">
				<p>
					Water Trapped:{' '}
					<span className={waterTrapped ? 'text-[var(--red)] font-extrabold' : ''}>
						{waterTrapped}
					</span>
				</p>
			</div>
		</div>
	);
}
