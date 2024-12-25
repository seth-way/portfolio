import { useState, useEffect, useRef } from 'react';
import { CirclePlay, CirclePause, RotateCcw } from 'lucide-react';
import IslandsGrid from '@/components/misc/svgs/IslandsGrid';
import { useAlgoAnimation } from '@/lib/hooks/use-algo-animation';
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

const islands = [
	// Complex Cluster
	[
		[1, 1, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 1, 1],
		[0, 1, 0, 0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 1, 0],
		[0, 0, 0, 0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0]
	],
	// Multiple Small Islands
	[
		[1, 0, 0, 0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 1, 0],
		[0, 1, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 0],
		[0, 0, 1, 0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 1]
	],
	// Single Large Island
	[
		[0, 0, 1, 1, 1, 1, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 0, 0]
	],
	// Single Thin Snake Island
	[
		[1, 1, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0, 0, 1, 1]
	],
	// Two Oddball Islands
	[
		[1, 1, 1, 0, 0, 1, 1, 1],
		[0, 0, 1, 0, 0, 1, 0, 0],
		[0, 1, 1, 0, 1, 1, 1, 0],
		[0, 0, 1, 1, 0, 0, 1, 0],
		[0, 0, 1, 0, 1, 1, 1, 1],
		[1, 1, 1, 0, 1, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 0, 1],
		[0, 0, 1, 0, 0, 0, 1, 1]
	],
	// All Water
	[
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	]
];

const ANIMATION_INTERVAL = 400;

export default function IslandsDemo({ show }) {
	const [islandIdx, setIslandIdx] = useState(0);
	const [grid, setGrid] = useState(deepCopy(islands[islandIdx]));
	const [currentPos, setCurrentPos] = useState({ row: -1, col: -1 });
	const [marked, setMarked] = useState(0);
	const [islandCount, setIslandCount] = useState(0);
	const [animationState, setAnimationState] = useState('play');
	const animations = useAlgoAnimation(ANIMATION_INTERVAL);

	useEffect(() => {
		if (show) {
			const newIsland = deepCopy(islands[islandIdx]);
			setGrid(newIsland);
			setMarked(0);
			setIslandCount(0);
			animations.reset();
			countIslands(newIsland);
		}
	}, [islandIdx, show]);

	function countIslands(grid) {
		const gridCopy = deepCopy(grid);
		animations.add(() => setAnimationState('play'));
		gridCopy.forEach((row, i) => {
			row.forEach((_, j) => {
				animations.add(() => {
					setCurrentPos({ row: i, col: j });
					if (grid[i][j]) setIslandCount(prev => prev + 1);
				});

				if (grid[i][j]) {
					markIsland(i, j, gridCopy);
				}
			});
		});

		animations.add(() => setCurrentPos({ row: -1, col: -1 }));
		animations.add(() => setAnimationState('complete'));
		animations.play();
	}

	function markIsland(row, col, grid) {
		grid[row][col] = 0;

		animations.add(() => {
			setGrid(prev => {
				prev[row][col] = '';
				return prev;
			});
			setMarked(prev => prev + 1);
		});

		[-1, 1].forEach(dir => {
			if (grid[row][col + dir]) markIsland(row, col + dir, grid);
			if (grid[row + dir] && grid[row + dir][col]) markIsland(row + dir, col, grid);
		});
	}

	function handleIslandChange(val) {
		const newIsland = deepCopy(islands[val]);
		setGrid(newIsland);
		setIslandCount(0);
		setIslandIdx(val);
		animations.reset();
		countIslands(newIsland);
	}

	function handlePlay() {
		animations.play();
		setAnimationState('play');
	}

	function handlePause() {
		animations.pause();
		setAnimationState('pause');
	}

	function handleRewind() {
		const newIsland = deepCopy(islands[islandIdx]);
		setGrid(newIsland);
		setMarked(0);
		setIslandCount(0);
		animations.rewind();
		setAnimationState('play');
		animations.play();
	}

	return (
		<div className="w-full h-full p-2 flex flex-col items-center justify-between relative overflow-hidden">
			<div className="h-[85%] w-full relative flex items-stretch justify-evenly">
				<div className="h-full aspect-square">
					<IslandsGrid
						island={grid}
						curRow={currentPos.row}
						curCol={currentPos.col}
						marked={marked}
					/>
				</div>
				<div className="flex flex-col items-center justify-around h-full overflow-hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="p-1">{`Grid: ${islandIdx + 1}`}</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="left" sideOffset={-54} className="min-w-20 w-20">
							<DropdownMenuLabel className="text-wrap text-center">Choose Grid</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup value={islandIdx} onValueChange={handleIslandChange}>
								{islands.map((_, i) => (
									<DropdownMenuRadioItem value={i} key={`island-selector-${i}`}>
										{i + 1}
									</DropdownMenuRadioItem>
								))}
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
					<Tooltip>
						{animationState === 'play' ? (
							<>
								<TooltipTrigger>
									<CirclePause onClick={handlePause} />
								</TooltipTrigger>
								<TooltipContent>
									<p>pause</p>
								</TooltipContent>
							</>
						) : animationState === 'pause' ? (
							<>
								<TooltipTrigger>
									<CirclePlay onClick={handlePlay} />
								</TooltipTrigger>
								<TooltipContent>
									<p>play</p>
								</TooltipContent>
							</>
						) : (
							<>
								<TooltipTrigger>
									<RotateCcw onClick={handleRewind} />
								</TooltipTrigger>
								<TooltipContent>
									<p>restart</p>
								</TooltipContent>
							</>
						)}
					</Tooltip>
				</div>
			</div>
			<div className="h-[10%]">
				<p>
					Islands Found:{' '}
					<span className={islandCount ? 'text-[var(--red)] font-extrabold' : ''}>
						{islandCount}
					</span>
				</p>
			</div>
		</div>
	);
}

function deepCopy(matrix) {
	return matrix.map(subArray => [...subArray]);
}
