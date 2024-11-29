import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// dino animations
const ROAR_TRANSITION = { duration: 2.2 };
const dino = {
	origin: { x: 0, y: 0.9 },
	variants: {
		initial: {
			rotate: -10,
			transition: { duration: 0.25, ease: 'easeInOut' }
		},
		roar: {
			rotate: [-10, -23, -20, -22, -10],
			times: [0, 0.35, 0.5, 0.7, 1],
			transition: { ...ROAR_TRANSITION, repeat: Infinity, transition: 'easeInOut' }
		}
	}
};

const jaws = {
	origin: { x: 0.59, y: 0.46 },
	variants: {
		initial: {
			rotate: -12,
			transition: { duration: 0.25, ease: 'easeInOut' }
		},
		roar: {
			rotate: [-12, 17, 15, 18, -12],
			times: [0, 0.35, 0.5, 0.7, 1],
			transition: { ...ROAR_TRANSITION, repeat: Infinity, transition: 'easeInOut' }
		}
	}
};

const head = {
	origin: { x: 0.45, y: 0.49 },
	variants: {
		initial: {
			rotate: 0,
			transition: { duration: 0.25, ease: 'easeInOut' }
		},
		roar: {
			rotate: [0, -13, -11, -13, 0],
			times: [0, 0.35, 0.5, 0.7, 1],
			transition: { ...ROAR_TRANSITION, repeat: Infinity, transition: 'easeInOut' }
		}
	}
};

const arms = [
	{
		origin: { x: 0.4, y: 0.72 },
		variants: {
			initial: {
				rotate: 0,
				transition: { duration: 0.25, ease: 'easeInOut' }
			},
			roar: {
				rotate: [0, -9, -9, 5, 0],
				times: [0, 0.25, 0.75, 0.86, 1],
				transition: { ...ROAR_TRANSITION, repeat: Infinity, transition: 'easeInOut' }
			}
		}
	},
	{
		origin: { x: 0.4, y: 0.72 },
		variants: {
			initial: {
				rotate: 0,
				transition: { duration: 0.25, ease: 'easeInOut' }
			},
			roar: {
				rotate: [0, 9, 9, -5, 0],
				times: [0, 0.5, 0.7, 0.86, 1],
				transition: { ...ROAR_TRANSITION, repeat: Infinity, transition: 'easeInOut' }
			}
		}
	}
];

const DinoSVG = ({ animate }) => {
	const [dinoAnimate, setDinoAnimate] = useState('initial');
	const [headAnimate, setHeadAnimate] = useState('initial');
	const [jawsAnimate, setJawsAnimate] = useState('initial');
	const [armsAnimate, setArmsAnimate] = useState('initial');

	useEffect(() => {
		if (animate) roar();
		else stopRoar();
	}, [animate]);

	const roar = () => {
		setDinoAnimate('roar');
		setHeadAnimate('roar');
		setJawsAnimate('roar');
		setArmsAnimate('roar');
	};

	const stopRoar = () => {
		setDinoAnimate('initial');
		setHeadAnimate('initial');
		setJawsAnimate('initial');
		setArmsAnimate('initial');
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			width="100%"
			height="100%"
			version="1.1"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			imageRendering="optimizeQuality"
			viewBox="30 -145 323 215"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlnsxodm="http://www.corel.com/coreldraw/odm/2003"
			className="rotate-12">
			<defs>
				<clipPath id="d-body">
					<path d="M68,46 L64,40 30,48 32,83 73,83 73,79 78,75 75,69 77,50 75,47 Z" />
				</clipPath>
				<clipPath id="d-arm-1">
					<path d="M73,72 L80,71 89,69 92,64 99,65 99,60 92,55 85,59 75,67 74,67 Z" />
				</clipPath>
				<clipPath id="d-arm-2">
					<path d="M73,72 L73,82 104,78 104,65 92,64 89,69 80,71 Z" />
				</clipPath>
				<clipPath id="d-skull">
					<path d="M67,45 L64,50 65,53 80,53 80,57 76,65 79,65 90,54 93,50 92,45 106,41 110,42 135,59 150,50 148,40 110,10 90,12 75,20 Z" />
				</clipPath>
				<clipPath id="d-lower-jaw">
					<path d="M93,54 L90,35 106,41 112,43 135,60 130,70 120,75 Z" />
				</clipPath>
			</defs>
			<motion.g
				id="dino"
				initial="initial"
				variants={dino.variants}
				animate={dinoAnimate}
				style={{ originX: dino.origin.x, originY: dino.origin.y }}>
				<motion.g id="dino-body" clipPath="url(#d-body)">
					<path fill="hsl(var(--foreground))" d={dinoPath} />
					<g id="dino-body-details">
						<path
							fill="hsl(var(--background))"
							d="M67.9625 58.0742l-0.6233 -0.8004c-0.6239,0 -0.6239,0.6227 0.1777,1.9598l0.8914 0.9795c0.4451,0.3555 0.6233,0.7124 0.5339,1.0691l-1.8704 -0.9807 0.6237 1.3362 1.2467 0.891c1.2472,1.7811 1.8705,2.3154 2.0489,1.8705l-0.4454 -1.7811 0.3566 -1.07c0.0888,-0.3556 0,-0.6227 -0.267,-0.7121l-0.2676 0.5342 -0.4456 0.4462 0 -0.5343 0.0891 -0.6239 -1.7811 -2.5841 -0.2674 0z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M66.1813 65.8235c-0.0893,-0.6227 -0.267,-0.8897 -0.5349,-0.8004l-0.267 0.3556 -0.4458 0.1787 -0.356 0.9794 0.6237 0.2674 0.1782 0.3562c0.9801,0.9797 1.4255,1.0685 1.3359,0.3564l-0.1781 -0.4455 -0.3559 -0.4461 0 -0.8017z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M69.1205 68.1401c-0.3564,-1.2477 -0.7123,-1.4255 -1.0691,-0.8016l0 0.1784 0.4456 2.6721 0.6235 0.6232 0.2672 0.3562 0.6233 0.0893 0.7127 0.8907c0.2673,0.2674 0.4458,0.0891 0.5348,-0.5342 0.2672,-1.9597 -0.5348,-3.0289 -2.138,-3.4741z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M73.1293 70.7232l-0.0897 -0.0894c-0.7123,-0.3558 -0.8014,0.0894 -0.5342,1.3365l-0.0894 0.7124 -0.267 0.7127c0.0892,0.6233 0.4454,0.6233 1.0691,0l0.8016 -1.425 -0.8904 -1.2471z"
						/>
						<polygon
							fill="hsl(var(--background))"
							points="67.6062,74.9987 67.4282,73.1279 66.7153,72.9501 65.8245,72.5049 64.9336,72.3265 64.3109,71.5245 63.5091,70.9903 62.7962,70.189 62.5292,71.9703 63.242,75.7112 65.0232,77.0476 66.3595,77.3146 68.1412,76.9585 68.497,76.6907 "
						/>
						<path
							fill="hsl(var(--background))"
							d="M57.63 71.0793c-0.6233,0.6236 -1.0685,1.4256 -0.8903,2.2269l0 1.6034 0.267 1.6031 0.7123 0.5349 0.8018 -0.0891 0.5341 0.3561 2.5838 -0.1781 0.4453 -0.1781 -0.9795 -1.9598 -1.1585 -3.4742 0.178 -1.9597c-0.6233,-0.0882 -1.4251,0.5349 -2.494,1.5145z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M53.7997 70.9903l-0.0884 1.2471 -0.8913 0.1784c-0.3562,0 -0.6233,0.0891 -0.7125,0.2668l1.9599 3.6519 1.0685 0.98 0.8907 0.6237 0.0897 -0.5346 -0.1787 0.2671 -1.2469 -3.4736 0.0891 -1.0694 -0.0891 -0.3558 -0.1781 -0.4455 0 -0.6237 0.0891 -0.4452c-0.0891,-0.4455 -0.3562,-0.5345 -0.802,-0.2673z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M48.8123 74.6425c-0.3569,0.5343 -0.1782,0.8904 0.4451,1.2466l1.9599 0.6236 1.5136 0.2677 -1.5136 -1.2475c-0.713,-0.5342 -1.1585,-1.0691 -1.0691,-1.5143 -0.5346,-0.4455 -0.9798,-0.2671 -1.3359,0.6239z"
						/>
						<path
							fill="hsl(var(--background))"
							d="M71.7928 55.6695l-0.0891 -0.623 -0.3561 -0.3565c-0.5349,-0.4452 -0.7124,-0.4452 -0.8019,0l-0.0892 0.4449 0.1788 0.5346c0.0885,0.1787 0.1775,0.4461 0.0885,0.5342l-0.1781 0.2674 0 0.891 0.3566 0.1778 0.3562 0 0.0891 -0.0884 0.0888 -0.2671 0 -0.1778 -0.0888 -0.4461 0.2671 -0.3568 0.1781 -0.5342z"
						/>
						<polygon
							fill="hsl(var(--background))"
							points="69.6546,55.135 69.2093,55.0466 68.8534,55.4021 68.9422,56.2037 69.2093,56.5606 69.2986,56.7383 69.6546,56.6499 69.7438,56.3828 69.7438,55.8482 69.6546,55.5811 69.7438,55.4021 "
						/>
					</g>
				</motion.g>
				<motion.g
					id="dino-arm-1"
					initial="initial"
					animate={armsAnimate}
					variants={arms[0].variants}
					style={{ originX: arms[0].origin.x, originY: arms[0].origin.y }}
					clipPath="url(#d-arm-1)">
					<path fill="hsl(var(--foreground))" d={dinoPath} />
				</motion.g>
				<motion.g
					id="dino-arm-2"
					initial="initial"
					animate={armsAnimate}
					variants={arms[1].variants}
					style={{ originX: arms[1].origin.x, originY: arms[1].origin.y }}
					clipPath="url(#d-arm-2)">
					<path fill="hsl(var(--foreground))" d={dinoPath} />
				</motion.g>
				<motion.g
					id="dino-head"
					initial="initial"
					variants={head.variants}
					animate={headAnimate}
					style={{ originX: head.origin.x, originY: head.origin.y }}>
					<g id="dino-skull" clipPath="url(#d-skull)">
						<path fill="hsl(var(--foreground))" d={dinoPath} />
						<g id="dino-teeth-upper">
							<path
								fill="hsl(var(--foreground))"
								d="M121.406 43.6448c-0.5334,-0.2671 -0.9796,0.3564 -1.2466,1.6926l0.9794 -0.7124c0.4449,-0.5342 0.5343,-0.891 0.2672,-0.9803z"
							/>
							<polygon
								fill="hsl(var(--foreground))"
								points="123.0093,44.8028 122.6537,44.2686 121.673,45.0703 120.7833,46.6736 121.9405,45.9601 "
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M123.6332 46.8514c0.8016,-0.8913 0.9793,-1.514 0.6227,-1.9589 -0.1779,-0.179 -0.6227,0 -1.0688,0.4449l-1.5141 3.0277 1.9602 -1.5137z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M126.0378 45.5152c-0.8013,0.0894 -1.2465,0.3568 -1.4253,0.8026l-0.5345 1.2468 -1.3361 2.3154 2.2271 -1.8705 1.1586 -1.5137 -0.0898 -0.9807z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M127.3741 46.2284l-3.0291 4.1861c1.9603,-0.891 3.2068,-1.8704 3.8307,-3.2054l0.1778 -0.4461 -0.1778 -0.3568 -0.3568 -0.3564 -0.4448 0.1787z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M130.2252 46.763c-0.4461,-0.1791 -0.8914,0.0884 -1.4255,0.8016l-2.4944 3.3842c2.1375,-0.6236 3.4738,-1.7808 4.1858,-3.3842 0.0896,-0.4461 0,-0.7132 -0.2659,-0.8016z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M132.2723 47.2091l-0.6227 0 -0.445 0.3555c-0.7134,1.6034 -1.5152,2.6721 -2.2272,3.2948l3.117 -2.3153 0.3568 -0.8901 -0.179 -0.4449z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M132.8975 48.2767l-0.2684 0.0884 -0.2673 0.3568 -0.445 1.0688 -1.1582 1.6034 1.9598 -1.4256c0.7125,-1.1572 0.7125,-1.6917 0.1792,-1.6917z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M135.2119 48.0095c-0.0886,-0.4449 -0.4452,-0.4449 -0.8902,-0.2671 -0.267,0.0894 -0.4461,0.5343 -0.4461,0.9795l-0.7111 1.8705c0.4439,0 0.8901,-0.3556 1.4243,-1.1573l0.6231 -1.4256z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M136.3699 48.0095c-0.2661,-0.1778 -0.7124,0 -0.9794,0.6227 -0.6239,1.3362 -1.515,2.585 -2.7615,3.3857 0.8017,0 1.8704,-0.5345 2.9392,-1.514 0.7133,-1.5137 1.069,-2.3166 0.8017,-2.4944z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M138.4195 48.1873c-0.5356,-0.1778 -0.891,-0.1778 -1.1585,0.3568l-0.5344 1.3359c-0.3567,1.0688 -1.0691,2.0482 -2.0485,3.0289l3.0281 -2.3165c0.5355,-0.5346 0.8015,-0.9795 0.8909,-1.4244 0.1779,-0.5358 0.0894,-0.8913 -0.1777,-0.9807z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M140.3783 48.6322c-0.5346,-0.2671 -1.1573,0.2683 -1.6033,1.4256l-1.2465 2.2272 2.3152 -1.6926c0.8018,-1.1573 0.9808,-1.7811 0.5346,-1.9602z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M140.1109 50.8594c1.6033,-0.8016 2.1389,-1.3359 1.6926,-1.7811 -0.267,-0.267 -0.6227,-0.1778 -1.0689,0.4452l-0.6238 1.3359z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M142.7831 50.5039c-0.2671,-0.4461 -1.3359,0.4449 -3.4739,2.4935 0.8017,0 1.6047,-0.2674 2.5841,-0.9795 0.8898,-0.6239 1.2466,-1.1585 0.8898,-1.514z"
							/>
						</g>
						<g id="dino-skull-details">
							<path
								fill="hsl(var(--background))"
								d="M112.9442 20.8419l0.3567 0.3565c-0.446,-0.0894 -1.0699,0.0897 -1.6925,0.6239 -0.7132,0.7124 -0.8912,1.2465 -0.8018,1.7811l1.2465 1.4256c0.7133,0.4449 0.9796,0.8898 0.8911,1.6034 -0.0893,0.891 -0.8911,1.5137 -2.3153,2.4047 -0.9805,0.5346 -0.9805,1.514 0,2.7618 0.9795,1.2465 1.8694,1.0688 2.9384,-0.2674l1.8712 -3.5632c0.2674,-1.0689 0.1782,-2.4051 -0.2679,-3.9188l-1.6918 -3.5632 -0.446 0 -0.0885 0.3555z"
							/>
							<path
								fill="hsl(var(--background))"
								d="M119.8025 26.4534l0.179 -0.1778 -0.8028 0.3568 0.2674 2.0482 0.7132 1.8705c0.267,1.0688 0.267,1.6927 0.0882,2.0495l-0.7121 0.4449 -0.8901 0.2671c-0.1788,0.2674 0.267,1.1585 1.514,2.6721l2.5826 2.4944c0.7134,0.2674 1.7811,-0.4461 3.2959,-1.8714 1.1573,-1.0679 1.3363,-2.1367 0.6239,-3.2951l-4.5435 -5.6114c-0.8007,-1.514 -1.4246,-1.9601 -2.1367,-1.4256 0.266,-0.0884 0.5335,0 0.8911,0.3568l-0.8029 0 -0.2671 -0.1791z"
							/>
							<path
								fill="hsl(var(--background))"
								d="M128.9774 37.7659l1.3359 -0.5333c-1.4253,0 -2.4046,0.1778 -2.672,0.6226 -0.891,1.0692 -0.8018,1.693 0.2674,1.8708l2.0482 -0.1778 2.5828 0.1778c0.268,-1.7823 -0.89,-2.405 -3.5623,-1.9601z"
							/>
						</g>
					</g>
					<motion.g
						initial="initial"
						variants={jaws.variants}
						animate={jawsAnimate}
						style={{ originX: jaws.origin.x, originY: jaws.origin.y }}
						id="dino-lower-jaw"
						clipPath="url(#d-lower-jaw)">
						<path fill="hsl(var(--foreground))" d={dinoPath} />
						<g id="dino-teeth-lower">
							<path
								fill="hsl(var(--foreground))"
								d="M129.9569 62.3509c-2.0482,2.0483 -2.7618,3.2948 -2.0482,3.9188 1.0687,0.8016 1.6913,-0.5343 2.0482,-3.9188z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M129.1552 60.5686c-2.1379,2.6733 -3.0277,4.2755 -2.5829,4.7216 0.8017,0.5333 1.6034,-0.9804 2.5829,-4.7216z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M124.523 64.2214c0.5345,0.4449 1.3361,-0.3568 2.3164,-2.0495 0.8018,-1.6034 1.3363,-2.7615 1.2469,-3.2064l-2.2272 2.3166c-1.3361,1.6031 -1.7811,2.4932 -1.3361,2.9393z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M122.564 63.5082c0.6231,0 1.4256,-0.5346 2.1379,-1.6025l1.0689 -2.0492 -3.92 2.6721c-0.3555,0.1778 -0.4448,0.3565 -0.1778,0.6227l0.891 0.3568z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M123.1871 61.2822l1.3359 -2.6733 0.8027 -2.8499 -2.672 4.0084 -0.6239 1.2474c-0.0894,0.4452 0,0.623 0.267,0.7124l0.8902 -0.4449z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M120.0696 61.9057c0.7136,0.4452 1.1585,-0.0893 1.6034,-1.2474l0.4451 -2.4944c-1.7811,2.3153 -2.4933,3.4738 -2.0485,3.7418z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M119.4461 60.6583c0.9803,-1.0692 1.5149,-2.3157 1.782,-4.0977l-2.4944 2.9393 -0.0884 0.9794c0.0884,0.3568 0.4449,0.4462 0.8007,0.1791z"
							/>
							<polygon
								fill="hsl(var(--foreground))"
								points="118.6453,57.5399 119.3576,55.5811 117.1305,57.7187 116.8632,58.6088 117.5753,59.1433 "
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M117.7543 54.4226l-1.6927 1.7811c-0.8016,0.624 -0.9795,0.9807 -0.3556,1.2478 0.3556,0.1778 0.8899,-0.1778 1.4245,-1.0688 0.4448,-0.7132 0.6239,-1.3362 0.6239,-1.9602z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M116.8632 52.73l-3.029 2.4944 0.1792 0.9794c0.2671,0.2674 0.5341,0.3568 0.7119,0.1791l1.1586 -1.4256 0.9794 -2.2272z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M112.9442 54.4226c0.7124,0.1779 1.3363,-0.6236 1.781,-2.4047l-1.6032 1.0688 -0.8014 0.8017 0.6236 0.5342z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M113.9236 50.8594l-1.603 0.8017c-0.7123,0.5345 -0.8016,0.9807 -0.3556,1.4255 0.266,0.3565 0.9792,-0.3567 1.9586,-2.2272z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M111.2516 51.394c0.446,0.3564 0.9795,-0.1769 1.5149,-1.6034l-1.1581 0.8017c-0.4462,0.3564 -0.7132,0.6248 -0.3568,0.8016z"
							/>
							<path
								fill="hsl(var(--foreground))"
								d="M111.3412 49.6129l0.445 -0.891 -1.3363 0.5355 0 0.6227c0.2673,0.3567 0.6239,0.1778 0.8913,-0.2671z"
							/>
						</g>
					</motion.g>
				</motion.g>
			</motion.g>
		</svg>
	);
};

export default DinoSVG;

var dinoPath =
	'M109.0247 12.7371c-0.6231,-0.0897 -1.6034,0.2671 -3.0278,1.0688l-1.3362 0.3568 -1.5149 0.0881 -2.5829 1.3362 -2.8499 0.3564c-0.4454,0 -0.98,0.2674 -1.7818,0.8914l-1.8703 0.9794c-0.8016,0.1778 -2.0488,-0.0897 -3.9191,-1.1585l-0.9797 -0.7124c-0.4452,-0.267 -0.8014,0 -1.0691,0.4452l1.0691 1.5137 0.4452 0.2684 0.4452 0.3555 -0.1788 0.9807 0.6241 0.9794c0.2673,0.2671 0.2673,0.6227 0,0.9795l-2.1372 -0.624 -1.6925 -1.1572 -2.138 -0.2674c-0.8911,0.0897 -1.4256,0.5346 -1.6034,1.0691l1.9596 1.2465c0.8904,0.4462 1.1579,0.9804 1.0691,1.7811 1.1575,0 1.4249,0.4462 0.8016,1.1582l-1.9599 0.2674c-0.6233,0.0894 -1.6034,-0.2674 -2.9393,-0.9794 -1.6923,-0.8914 -2.5831,-0.8017 -2.672,0.267l0.8014 1.2466 0.8021 1.514c0.6227,2.0492 0.3562,2.8508 -0.8909,2.5838l-1.3359 -0.8017 -1.6037 -0.2671c-0.9801,0.4449 -0.9801,1.2466 0,2.3154 1.3359,1.3362 1.8707,2.3166 1.7811,2.7618l-1.6031 -0.5346c-0.5343,-0.2671 -0.8013,-0.1778 -0.8904,0.3568l0.7124 1.4243c0.5342,0.5343 0.8014,0.9804 0.7127,1.5137l-1.8702 -0.8004c-0.6242,-0.6239 -1.2474,-0.8016 -1.7817,-0.6239l1.4249 3.4738c0,1.1585 -0.2673,1.4256 -0.7127,0.8901l-1.4252 -1.514c-0.8907,-0.1778 -1.2469,0.1778 -1.0686,1.0688l0.7121 1.8708c0.1791,0.8013 -0.1778,1.8704 -1.1575,3.0286l-0.8905 -0.8016c-0.267,-0.4449 -0.5347,-0.6227 -0.8912,-0.5343 -0.445,0.0894 -0.6233,0.2671 -0.445,0.7121l0.6234 0.9807c0.8016,1.5137 0.7129,1.9589 -0.4456,1.5137l-1.0685 -1.9598c-0.6239,-0.0885 -0.7129,0.3564 -0.3566,1.3371 0.3566,0.9782 0.1784,1.6917 -0.5343,1.7811 -0.7127,0.0884 -1.4249,-0.9807 -2.0483,-3.3854 -0.5349,0.2671 -0.8025,0.9804 -0.8025,1.9598 -0.0886,1.1585 -0.1781,1.7811 -0.4446,2.0483 -0.5347,0.8016 -0.9799,0.891 -1.3365,0.3567l-1.2465 -1.6926 -0.8907 -0.2674 -0.5346 -0.8004c-0.5346,-0.1791 -1.0689,0 -1.3359,0.4449l0 1.8704 0.267 2.0486 -0.8909 -0.1778 -3.0288 -2.0495c-1.2465,-0.8007 -1.7807,-0.3555 -1.6034,1.2465l0.2678 0.8029 -0.2678 0.7121c-0.7123,0.5345 -1.3359,0.5345 -1.7811,0l-0.9799 -1.515 -1.6032 -0.0884c-0.5342,0.3555 -0.8904,0.8913 -0.7123,1.6034 0.0883,0.891 0,1.514 -0.3569,1.7811l-1.514 0.3567 -0.0889 -0.7135 0.1781 -0.8004 -3.2955 -0.0894c-1.9601,1.1582 -2.3159,2.0483 -1.0694,2.5829l0 1.4252c-0.5343,0.0897 -1.4246,0.624 -2.8503,1.5141 -0.089,-1.9599 -0.4454,-3.0278 -0.9798,-3.3845 -1.0693,-0.891 -2.0481,-0.891 -2.7607,0.1778l0.9797 -0.2671 -1.5147 0.891 0.535 -0.6239c-1.2472,0.3567 -2.1383,0.891 -2.5828,1.6926l-1.0695 4.5429 0.4452 2.2269 -1.1577 7.1257c0,1.3363 0,2.405 0.5344,3.0283 0.5343,0.713 0.6233,1.3362 0.267,2.0489 -0.6233,1.7814 -0.6233,2.9393 -0.1781,3.3851l1.1586 0.6233 1.6917 0.2671c1.0687,-0.2671 1.6919,-0.2671 2.0488,0 1.6927,1.3359 5.2552,2.5831 10.4214,3.6518l8.1945 -0.5345 6.2355 0.1784 3.6521 -0.8016 2.5826 0 3.8303 -0.9801 8.1947 -0.6236 2.2267 -0.5343 1.5146 -1.5143c0.8014,-1.0688 1.6918,-1.6917 2.6721,-1.9598l3.9187 -1.1576 0.3565 -1.6037 1.1581 0.891 1.4257 0.0894 0.5342 -0.4455 0.4445 -0.6237 1.5146 -0.2674 3.1176 0.3562 1.7809 3.0293 0.3566 -1.5147 -0.1778 -1.692 -0.9803 -0.802 -0.6231 -1.2473c-0.6235,-0.7124 -1.6037,-0.8014 -2.6723,-0.3559 -1.247,0.5349 -2.1378,0.8017 -2.583,0.5349 0.089,-1.2474 1.0687,-1.9598 2.9395,-1.9598 0.6233,0 1.4252,0.2671 2.1375,0.6233l1.7817 0.6236c-0.3566,-1.6034 -1.9598,-2.6718 -4.899,-3.3851 -3.4738,-0.712 -4.9882,-0.0884 -4.3645,1.9602l-1.2475 0.4452c-0.0888,0.7123 -0.356,1.1578 -1.0685,1.3362l-1.8707 0.2671c-0.0892,0.3561 -0.1781,0.5345 -0.4452,0.6235l-0.8905 0.2671 -0.7123 1.6033 -1.5147 0.1782c-0.7123,-0.0891 -1.1582,0.1784 -1.4255,0.7126l-1.6028 -0.8016 -0.6239 0.6236c-0.7127,-0.089 -0.8908,-0.7127 -0.6233,-1.9601 0.3562,-1.3361 0.9791,-1.6027 1.7814,-0.8903 0.178,-0.6233 0.7124,-0.8017 1.4246,-0.6233l1.7818 0.3564c0.178,-0.2671 0.8022,-0.5349 1.6925,-0.6242l1.8699 -0.7124c0.8023,-0.6233 1.3365,-1.5149 1.8709,-2.7615 -0.7125,-0.267 -0.9798,-0.6227 -0.7125,-1.0675 0.1781,-0.4462 0.5345,-0.7136 1.1579,-0.5359l-0.0894 -1.4243c0.4459,0.2671 0.9805,0.1778 1.5146,-0.2671l1.4257 -1.1585 1.8701 0.0897 1.6922 0.3555c0.4452,-1.514 -0.7127,-2.3156 -3.3846,-2.1379l-2.5834 0.3567 -0.6235 0.8017 -0.8906 0.6239 -0.4452 -2.3166c0.4452,0.3565 0.8906,0.3565 1.4246,0l1.2475 -0.8913 1.9593 0.3568 1.5142 -0.2671c-1.1579,-2.405 -3.4735,-2.5829 -7.1256,-0.4452 -1.7811,1.0691 -2.4051,1.9601 -2.1374,2.8499l0.7123 0.6239c0.5343,0.2674 0.7125,0.4452 0.7125,0.7132l-0.8014 1.5131 0.8014 0.9804 -1.7817 1.0688 -2.3151 0.3555 -0.9804 1.4262 -0.8904 0.1778c-0.2676,-0.089 -0.5342,0.0894 -0.624,0.3565l-2.2268 -0.1781 -0.6227 -0.8017 -0.891 -0.7132c-0.6237,-0.2674 -1.0688,0.1788 -1.5146,0.9804l-0.8907 1.7811c-1.6918,-1.2465 -2.4938,-3.3845 -2.3157,-6.4131l1.8705 0.6236 -0.8014 -1.6031 -0.4452 -1.9601c0.3556,-1.7811 1.2466,-2.5829 2.4934,-2.5829l0 -3.7409c0.8911,-1.2478 1.2472,-0.6239 1.2472,1.6034 0.0891,1.514 -0.089,3.9187 -0.6233,7.3032l3.0283 -5.4327 0.2672 -3.029c0.0889,-1.4253 0.5341,-1.9598 1.2473,-1.3359 0.6227,0.4449 0.8014,1.514 0.5338,3.2067l-3.1174 7.7502c0.4452,0.0885 1.0691,-0.6239 1.8704,-2.2272l1.6038 -3.2076 1.0685 -1.2465 0.1784 -1.6034 1.3363 -3.029c0.4452,0.0897 0.6233,0.7136 0.4452,1.6927l-0.3562 3.029 2.5832 -7.7494 0.6233 0 0.2674 4.8985c0.7122,-0.8901 1.2471,-2.1379 1.3361,-3.4738l-0.089 -2.3157 0.1781 -2.0495c1.2466,-0.3555 1.7811,0.5358 1.6033,2.6721 -0.1787,2.1389 0,3.1182 0.4452,3.029 0,-2.4932 0.3566,-4.0965 1.1576,-4.8098 0.2677,0.2671 0.7131,1.3359 1.3366,3.2064l1.781 2.9396 8.9068 5.9681 3.7411 1.5137c0.8018,0.5355 1.8705,1.4265 2.9394,2.6721l2.672 2.9396c2.2273,1.9602 4.8111,2.9399 7.5717,3.2073l2.0494 -0.2674 1.0677 -0.2674c0.0895,0 0.1789,0.0891 0.2682,0.1788l0.3556 0.1775c1.8705,-0.1775 2.8511,-0.8014 2.9395,-1.9592l-1.514 -0.5352 -0.9803 -1.1573 -3.5623 -1.2465 -3.2068 -1.9598 -2.5827 -2.6725 -2.9394 -2.1376 0.1778 -0.4449 -3.3854 -4.7216c-1.3349,-3.117 -1.3349,-4.7204 0.0894,-5.0759l1.1585 0.5333 1.4253 -0.0884 -2.406 -3.92 -1.9589 -1.3359c-1.1582,-0.6239 -1.8704,-0.8913 -2.1376,-0.6239l-0.2671 -0.8901 2.7615 -0.3564 0.8004 -0.7124 0.9807 -0.2671c0.5342,-0.179 1.0689,0 1.6034,0.4449l1.3358 0.6239 2.2272 -0.6239c0.8899,-0.1778 1.6035,0.1778 2.1368,1.0688 0.5355,0.8017 1.0697,1.4256 1.6927,1.514l2.3153 0.4462 1.6926 1.3359c1.3362,-0.0894 2.2273,0.1778 2.4944,0.8016l2.405 0.2671 2.6722 0.891 2.7605 0.0884c1.3363,0.0897 2.139,0.3568 2.4944,0.8029l1.0688 -0.0906 0.9808 0.4461 1.7811 -0.179c1.5136,0.179 2.2268,1.0688 2.2268,2.6721 1.1585,0.4461 2.0486,0.2674 2.9396,-0.6227l1.0688 -1.7811 0.7125 -1.782c0.4458,-1.1585 0.3564,-2.2272 -0.3568,-3.1173l-2.0483 -3.2064c-0.89,-1.5152 -1.6033,-2.4944 -2.4051,-3.1182l-3.3845 -2.2263 -3.5631 -1.1582 -4.1859 -3.6516 -0.9794 -0.267 -0.8028 -0.624 -6.0566 -4.2755c-2.6722,-1.6926 -4.4534,-3.2066 -4.9876,-4.6322l-1.6033 -0.7132 -0.8017 0 -0.8026 -0.2662 -0.0885 -1.3359c0.0885,-0.7132 -0.1789,-1.3362 -0.6239,-1.6926l-3.5631 -0.8901 -1.8705 -1.9598z';
