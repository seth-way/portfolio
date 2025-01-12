import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const FALL_DUR = 4.5;
const LAND_DUR = 1.5;

const Paratrooper = ({ left, dir }) => {
	const [phase, setPhase] = useState('initial');

	useEffect(() => {
		animateTrooper();
	}, []);

	const animateTrooper = () => {
		setPhase('falling');
		setTimeout(() => {
			setPhase('landing');
			setTimeout(() => {
				setPhase('');
			}, LAND_DUR * 1000);
		}, FALL_DUR * 1000);
	};

	const parentVariants = {
		initial: {
			x: left,
			y: '60%',
			rotate: dir === 'ltr' ? -90 : 90,
			transition: { duration: 0 }
		},
		falling: {
			rotate: 0,
			x: left,
			y: '295%',
			transition: {
				default: {
					duration: FALL_DUR,
					ease: 'easeIn'
				},
				rotate: {
					delay: 0.6,
					type: 'spring',
					stiffness: 70,
					mass: 3
				}
			}
		},
		landing: {
			rotate: 0,
			x: 0.92 * left,
			y: '400%',
			transition: { duration: LAND_DUR, ease: 'easeOut' }
		}
	};

	const paratrooperVariants = {
		initial: {
			scaleX: 0.1,
			scaleY: 0.3,
			transition: { duration: 0 }
		},
		falling: {
			scaleX: 1,
			scaleY: 1,
			transition: { duration: 1.6, ease: 'easeInOut', delay: 0.1 }
		},
		landing: {
			scaleX: 1,
			scaleY: 0.9,
			transition: { duration: LAND_DUR, ease: 'easeInOut' }
		}
	};

	return (
		<>
			{phase && (
				<motion.div
					className="w-[10%] h-max absolute z-[11]"
					variants={parentVariants}
					initial="initial"
					animate={phase}
					style={{ transformOrigin: 'top center' }}>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						viewBox="457 0 734 1200"
						width="100%"
						enableBackground="new 457 0 734 1200"
						xmlSpace="preserve"
						variants={paratrooperVariants}
						initial="initial"
						animate={phase}
						style={{ transformOrigin: 'center' }}
						className="paratrooper z-[11]">
						<path
							fill="black"
							stroke=""
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M1140.7,373.8c13.6-26.7,39.7-79.6,39.7-111.5  C1180.4,118.6,1020.2,2,822.5,2S464.6,118.6,464.6,262.3c0,27.8,24,77.4,34.5,101.2c1.4-0.3,2.7-0.5,4.2-0.7L744,969.4h-2.1l15,42.5  c-0.9,1.6-1.2,3.8-0.9,5.5c0.7,4.6,0.8,9.8,1.2,14.4c0.3,3.2,0.5,4.4-2.2,5.8c-2.8,1.4-3.4-0.6-4.1,3.5c-0.7,4-0.5,10.6,0.5,14.4  c1.1,4.2,4.1,6.2,8,8c4.7,2.2,8.4,1,13.4,1.4c-0.1,2,1.4,4.4,0.6,6.3c-0.5,1.2-2.9,2.2-3.9,3.2c-2.5,2.7-4.6,6.1-6.2,9.3  c-2.2,4.3-9.5,17.3-1.7,19.1c0.6,6.4,0,15.3-1.6,21.3c-1.3,4.7-3.2,6.9-2.4,11.8c0.7,4.5,0.9,8.8,1.2,13.6c0.3,4-0.6,10.3,0.6,14.3  c0.8,2.6,2.3,2.9,2.4,5.9c0,1.8-0.5,4.4-0.6,6.5c-0.3,4.5-10.9,23.2,0.8,19.1c1.3-0.5,2.7-1.4,4.1-2.6c0.2,2.8,1.6,5,5,4.1  c2.7-0.7,6.3-3.7,8.3-5.8c2.9-3,5-6.7,6.2-10.5c1.3-4.1,3.2-7,5.1-10.9c3.7-7.6,4.5-16.3,5.5-24.7c0.7-5.5,3.8-5.6,7.6-9.6  c2.4-2.6,4.6-6.6,6.2-9.8c1.9-3.6,4.4-8.5,4-12.6c-0.2-2-1.3-4.1-1.7-6c-0.4-2.3,0.3-4.7-0.7-6.9c1.6-0.1,3.3,0.2,4.7-0.6  c8.8-5.4-2.4-19.3-1.2-26.1c1.4-7.8,14.5-10.6,14.2-19c-0.1-3-3.5-8.4-4.7-11.3c-1.6-3.8-4.9-6.2-6.5-10.1c-2-4.7,1.1-8.6-0.6-13.7  c0-0.1,0-0.1-0.1-0.1v-6.7l20.2-44.1l-0.9-0.5l301.8-594.9C1139.1,373.2,1139.9,373.5,1140.7,373.8z M641.4,355.8  c11.1,0,21.2,4.3,28.4,11.1c0.2-0.1,0.3-0.2,0.5-0.3l86.9,518.1L608.5,372.1C615.6,362.3,627.6,355.8,641.4,355.8z M542.8,370.2  c6.3-4.8,17.8-8,31-8c15.4,0,28.5,4.4,33.7,10.6l151.2,521.6l8.3,49.7l-0.4,16.4L541.1,369.1C541.7,369.5,542.3,369.8,542.8,370.2z   M761.5,903.7l6.1,21.2l-0.4,13.3L761.5,903.7z M759.8,894l-88.6-528.2c9.5-6.1,23.8-10.1,39.7-10.1c6.4,0,12.5,0.6,18.1,1.8  c2.9,1.9,7.3,3.8,13.9,4.2c3.4,1.5,6.5,3.1,9.1,5c0.6-0.5,1.2-0.9,1.8-1.4l16.5,592.1l-0.9-5.3l-0.8-27.4L759.8,894z M755.2,364.6  c8.1-5.5,18.6-8.8,30.1-8.8c16.5,0,30.9,6.8,39.1,17.1l-52.7,583.4L755.2,364.6z M767.4,1046.5c-1.7-1.8-1.1-4.7-4.7-4.3  c0.8-1.3,0.9-3.7,1.1-5.2c0.8-4.9,2.3-9,1.8-14.2c-0.3-3.2-0.2-9.7-3.1-11.7c-0.5-0.4-1-0.6-1.4-0.8l-14.4-40.9h-1.4l-241-606.7  c2.7-0.3,5.4-0.5,8.2-0.5c10.4,0,19.8,2.3,27.1,6.1l225.8,592.2h-1.1l10.8,88.3c-0.2,0-0.5,0-0.7,0  C771.6,1048.8,769.3,1048.6,767.4,1046.5z M781,1137.1c-0.1,4.4-0.6,8.1-1.3,12.3c-1.3,7.3,2.6,15.6,0.2,22.7  c-1,2.9-4.1,6.5-6.1,8.7c-0.4,0.4-0.8,0.8-1.2,1.2c0.5-2,0.4-4-0.5-5.7c-0.5,0-1.1-0.2-1.6-0.2c-0.2-2.6-0.2-5.5,0-8.1  c0.3-0.1,0.6-0.1,1-0.2c2.3-3.1,1.1-8.3,1.8-11.9c0.7-3.9,0.4-8.2,1.8-11.9c1.3-3.4,3-6.6,4.3-9.9c1.1-3,1.9-6.9,3.7-9.4  C784.1,1127.8,781.1,1133.4,781,1137.1z M815.4,1050.6c-1.1,1.4-3.4,2.8-4.9,0.8c-1.4-1.9,0.6-4.7,0.8-6.7c0.2-2.2,0-4.5-0.6-6.5  c-3-9.9-11.6-11.3-20.1-7.1c-2.8,1.4-5.9,7-4.8,10.7c1,3.3,5.6,6.9,1.8,10.6v1.8c-0.5-2.3-2.8-3.6-5.5-4.4l-8.8-89.3h-0.9  l53.1-587.3c4.3-1.6,9.2-2.6,14.5-2.6c8.3,0,15.8,2.3,21.3,6.1l-47.7,592.7h-2.3v47c-1,0.6-1.8,1.5-2.4,2.8  c-4,9.2,4.5,16.8,6.6,24.9C816.1,1046.4,817.1,1048.5,815.4,1050.6z M817.1,1006v-36.6h-2.4l47.7-592.5c10.2-3.7,30-11,52.7-11  c15.6,0,29.9,5.9,40.6,7.9L831.5,966.6L817.1,1006z M956.8,374L956.8,374c6.9-10.6,24.7-18.2,45.4-18.2c13.7,0,26,3.3,34.8,8.6  L833,963.5L956.8,374z M1038.2,364.5c6.5-1.5,13.7-2.4,21.2-2.4c17.6,0,33.3,4.6,43.7,11.9l-269,589.8L1038.2,364.5z M835.4,967.2  l-1.2-0.7L1104,374.7c0.1,0,0.1,0.1,0.2,0.1c4.7-2.6,11.6-4.2,19.3-4.2c5,0,9.7,0.7,13.7,1.9L835.4,967.2z"
						/>
					</motion.svg>
				</motion.div>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, left, bottom: '10px' }}
				transition={{ duration: 0, delay: FALL_DUR }}
				className="w-[10%] h-max absolute flex justify-center">
				<motion.svg
					width="25%"
					viewBox="467.2001953125 345.3999328613281 148.9996337890625 115.89993286132812"
					xmlns="http://www.w3.org/2000/svg"
					left="50%">
					<path
						d="M598.7,377c0,0.2,0,0.5,0,0.7c-0.5,0.2-1.5,0.5-2,0.3c0-0.7,0-1.1-0.3-1.4c-0.9,0-1.8,0-2.6,0&#10;&#9;&#9;c0,0.6-0.2,1.1-0.3,1.4c-0.1,0.4,0.3,1.4,0.1,2c-0.1,0-0.2,0-0.4,0c-0.1-0.3-0.1-0.3-0.4-0.5c0-1,0.2-1.5-0.2-2.2&#10;&#9;&#9;c-0.3,0.2-0.5,0.2-0.9,0.1c0.1,0.5,0.1,0.7-0.5,0.8c-0.1-0.3-0.1-0.3-0.5-0.3c-0.2,0.2-0.2,0.2-0.6,0.3c-0.2-0.2-0.2-0.2-0.6-0.3&#10;&#9;&#9;c-0.1,0.2-0.2,0.2-0.4,0.3c-0.7-0.2-0.5-0.4-1.1,0c-0.3-0.2-0.3-0.3-0.7-0.3c-0.2,0.2-0.2,0.2-0.6,0.3c-0.1-0.3-0.1-0.2-0.4-0.3&#10;&#9;&#9;c-0.2,0.2-0.2,0.3-0.6,0.3c0-0.1-0.1-0.2-0.1-0.3c-0.5,0-0.5,0-0.9,0.3c-0.3-0.2-0.2-0.3-0.7-0.3c-0.2,0.2-0.4,0.2-0.6,0.3&#10;&#9;&#9;c0.1,0.3,0.1,0.2,0,0.5c-0.4,0.2-0.8,0.3-1.1,0.5c-0.3,1-0.1,2.3,0,3.5c0.1,2.5-0.1,4.2-0.6,6.5c-0.7,0.2-1.9,0-2.6-0.1&#10;&#9;&#9;c0-2-0.1-4-0.1-6c0.1-1.2,0.3-2.4,0.4-3.6c-0.2-0.6-1-0.6-1.4-1c0-0.3-0.1-0.4-0.4-0.6c-0.5,0.1-0.4,0.2-0.9,0.3&#10;&#9;&#9;c-0.1-0.2-0.1-0.2-0.3-0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2-0.2-0.2-0.3-0.7-0.3c-0.2,0.3-0.3,0.2-0.6,0.4c0.3,0.5,0,0.5-0.1,1&#10;&#9;&#9;c0.1,0.4,0.3,0.9,0.4,1.3c0.5,1.8-0.5,5.9-1.4,6.5c-0.8,0.6-2.6-0.2-3.3,0.2c-0.1,0.1,0,0-0.1,0.2c0.4,1.6,0.8,3.3,1.2,4.9&#10;&#9;&#9;c-1.5,0.4-5.2,0.6-6.1,1.9c-0.2-0.1-0.2-0.2-0.5-0.1c-0.3,0.2-2.3,2.9-2.4,3.2c0,0.3,0,0.5,0,0.8c-0.2,0.8-1,2.2-1.4,2.7&#10;&#9;&#9;c-1,1.2-2.6,1.9-3.8,3c-0.3,0.3-0.3,0.8-0.7,1c-0.4,0.3-0.7,0.1-1,0.5c2.1,3.2,1.2,10,1.5,14.5c0.2,3.9,0.5,8.5-0.3,12.8&#10;&#9;&#9;c-0.1,1.6-0.2,3.2-0.4,4.8c-0.3,1.2-1.1,2.7-1.3,3.8c-0.1,0.7,0.3,1.1,0.4,1.6c0.1,0.5-0.3,0.8-0.4,1c-0.1,0.4,0.3,1.8,0.1,2.5&#10;&#9;&#9;c2.6,2.1,3.5,3.8,8.9,3.2c0,0,0,0.1,0.1,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.1-0.4,0.2-0.6,0.3c0,0,0,0.1,0.1,0.1&#10;&#9;&#9;c1.7-0.1,3.3,0.2,3.9,1.3c0.1,0.3,0.2,0.6,0.3,0.8c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.3,0.4,1.7,0.2,2.1c-0.5,0.8-2,0.9-3.1,1.2&#10;&#9;&#9;c-2.1,0.6-12.3,1.1-14.2,0.3c0-0.2-0.1-0.3-0.1-0.5c-2.4-0.1-4.5,0.4-6.6,0.8c-0.8,0-1.7,0.1-2.5,0.1c-1.3,0.2-3.7,0-4.2-0.6&#10;&#9;&#9;c-1-1.2-0.3-5.9,0.1-7.6c0.3-1.2,0.2-2.6,0.6-3.8c0.2-0.8,0.7-1.9,0.9-2.5c0.3-0.9-0.9-1.8-0.6-3.1c0.3-1.5,0.4-3.8,0.1-5.2&#10;&#9;&#9;c-0.3-1.4,1.3-1.4,1.1-2.7c0.1-0.8,0.2-1.7,0.3-2.5c0.1-1.4-0.4-3.1-0.7-4.3c-0.2-0.8,0.1-2.2-0.6-2.5c-0.4,0.3-0.9-0.1-1.1-0.3&#10;&#9;&#9;c-5.2,2.1-11.8,5.4-18.6,5.8c-0.2,0.5-0.4,1-0.6,1.4c0.2,0,0.3,0.1,0.5,0.1c0.5,1.8,1.9,3.3,2.1,5.3c-0.2,0.2-0.4,0.3-0.5,0.6&#10;&#9;&#9;c1.4,1.4,2.7,5.2,3.6,7.1c1.5,3,5,9.4,3.1,13.8c-0.6,1.3-1.6,1.9-2.6,2.7c-1.4,1.1-3,2-5.3,2.4c-2.6,0.4-9.7-3.1-12-4&#10;&#9;&#9;c-1-0.2-2-0.5-3.1-0.7c-1.2-0.6-2.3-1.1-3.5-1.7c-1.2-0.8-2.5-1.5-3.7-2.3c-2.5-0.9-5.1-1.7-7.6-2.6c-0.9-0.2-1.8-0.3-2.6-0.5&#10;&#9;&#9;c-0.8-0.3-1.3-1.2-2-1.4c-1.1-0.1-2.3-0.2-3.4-0.3c-1,0.8-1.4,1.9-2.3,2.9c0.8,2.3,1.2,9.1-3.9,8c-1.8-0.4-3.6-1.5-4.6-2.7&#10;&#9;&#9;c-0.1-0.3-0.2-0.7-0.3-1c-0.3-0.3-0.6-0.1-0.9-0.5c-0.2-0.3,0.1-0.6-0.1-0.9c-0.3-0.4-0.9-0.5-1-1.2c0-0.2,0.1-0.4,0.1-0.6&#10;&#9;&#9;c-0.1-0.4-0.6-0.7-0.8-1.2c-0.2-0.6-0.3-3.6-0.1-4.1c0.4-0.8,0-0.8,0.3-1.4c0.2-0.3,0.5-0.5,0.7-0.8c-0.1-0.2-0.1-0.3-0.2-0.5&#10;&#9;&#9;c0-0.4,0.9-1.3,1.1-2c0.4-1.5,0.1-3.6,0-5c0-0.4,0.4-0.7,0.4-1c-0.1-0.2-0.1-0.4-0.2-0.7c0.4-2.1,1.5-4.6,4.1-5.2&#10;&#9;&#9;c1.2-0.3,7.6,1.9,8.4,2.5c0.5,0.3,0.5,0.8,1.1,1c0.9-0.4,1.9,0.3,3,0.2c1.1-0.1,2.1,0.3,2.9,0.6c1.6,0.6,3.4,0.1,4.9,0.7&#10;&#9;&#9;c0.9,0.4,1.7,1.1,2.9,1.3c0,0,0,0,0-0.1c-0.3-0.4-0.5-0.9-0.8-1.3c0-0.2,0.1-0.3,0.1-0.5c-0.8-0.6-1.6-1.3-2.4-1.9&#10;&#9;&#9;c-1.4-1.4-2.5-3-3.6-4.6c-0.3,0-0.6,0-0.9-0.1c-0.3-0.6-0.4-2.8-0.7-3.2c-1-1.2-1.2-2.8-1.3-4.4c-0.1-0.1-0.3-0.2-0.4-0.3&#10;&#9;&#9;c0-0.5,0.1-0.5,0.3-0.8c0.2,0,1.1-0.4,1.3-0.7c1-2.1-1.5-7,0.8-7.8c-0.3-2.3,0.5-4.1,0.9-5.9c-0.4-0.2-0.8-0.2-1.4-0.5&#10;&#9;&#9;c0,0.7-0.4,1-1,1.2c-2.6-0.9-6.4-3.4-5.9-6.8c0-0.4,0-0.9-0.1-1.3c0.2-0.7,0.9-1.2,1.1-2.2c-0.7-0.5-0.9-1.4-1.3-2.3&#10;&#9;&#9;c-1.5-3.8-0.6-3.8,1.7-6.5c0.1-1,0.1-2,0.1-2.9c0.4,0,3.8-0.7,3.8-0.7c1.1-2.5,2.2-4.9,3.3-7.4c1-1.6,2.5-2.6,4-3.8&#10;&#9;&#9;c1.2,0.4,1.6,0.2,2.6,1c0.7,0.1,0.9,0,1.4-0.3c0.7-1.7,2.7-3,4.2-4.1c0.5-0.5,0.9-1,1.4-1.4c1.3-1.1,4.8-3.2,6.9-3.3&#10;&#9;&#9;c0.6,0.3,1.1,0.6,1.7,0.9c0.3,0.3,0.6,0.6,0.9,0.9c0,0,0,0,0.1,0.1c1.1-0.4,2.2-0.8,3.4-1.2c2.4-0.7,4.6,0.4,5.9,1.4&#10;&#9;&#9;c0.3-0.1,0.6-0.3,0.9-0.4c0.9-1.4-0.4-3.4-0.7-4.4c-0.3-0.8-0.1-1.9,0.2-2.8c0.2-0.6,0.7-1,1.1-1.4c2.6-3.7,4.2-7.5,9.4-8.7&#10;&#9;&#9;c8.3-1.9,16.1,5.2,18.2,9.9c0.7,1.6,0.6,5.4-0.4,6.8c-0.3,0.1-0.6,0.3-0.9,0.4c-0.4,0.5-0.3,1.2-0.9,1.6c-0.5,0.2-1,0.4-1.6,0.6&#10;&#9;&#9;c-0.2,0.7-0.6,1.3-0.8,1.8c-0.5,1.3,1.4,2,0.1,3.7c-0.7,0.2-1.3-0.1-1.9-0.1c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.1,0.1,0.1&#10;&#9;&#9;c1.2,0.1,4.3,0.6,5.2,0c-0.1-0.3,0-0.8,0.1-1.1c2.1,0,4.2,0.1,6,0.4c0.2-0.2,0.2-0.3,0.6-0.3c0.3,0.6,0.6,0.2,1.1,0.1&#10;&#9;&#9;c0.1,0.3,0.2,0.3,0.6,0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.4,0.2,0.3,0.3,0.9,0.3c0.3-0.5,0.5,0,1.1,0.1c0.2-0.5,0.4-1.4,0.2-2.2&#10;&#9;&#9;c-0.2,0-0.4-0.1-0.6-0.1c0-0.2,0-0.3-0.1-0.5c-0.9,0-1.5,0.5-2.4,0.3c-0.2-0.1-0.4-0.3-0.6-0.4c-0.8-0.2-2.9,0.2-3.3-0.3&#10;&#9;&#9;c-0.2-0.6-0.1-2.7,0.2-3c1,0,2.1,0,3.1,0c0.4-0.1,1.1-0.6,1.9-0.4c0.3,0.1,0.2,0.3,0.7,0.3c0.1-0.5,0.1-1.2,0.4-1.6&#10;&#9;&#9;c0.7,0,1.4,0,1.8,0.2c0,0.5,0.1,1,0.1,1.6c2.8,0,4.8-1.3,7.3-0.4c0.7,0.3,0.6-0.4,1.1-0.1c-0.2,1.2-1.4,2.1-1.8,3.1&#10;&#9;&#9;c-0.2,0.6-0.1,1.1-0.4,1.5c0.1,0.1,0.2,0.2,0.3,0.3c0.7,0.1,1.4,0.2,2.1,0.3c0,0.8,0,1.6,0,2.4c0.1,0,0.2,0,0.3-0.1&#10;&#9;&#9;c0.4-0.1,0.4-0.1,0.4-0.5c0.6,0.1,1.3,0.3,1.9,0.4c0,0,0,0,0.1-0.1c0-0.3,0-0.5,0.1-0.8c0.7-0.1,2.8,0.2,3,0.3&#10;&#9;&#9;c0.3-0.1,0.5-0.2,0.8-0.3c0.2,0.2,0.2,0.3,0.6,0.3c0.2-0.2,0.2-0.2,0.6-0.3c0.2,0.2,0.2,0.2,0.5,0.3c0.5-0.5,0.5-0.1,1.1,0&#10;&#9;&#9;c0.1-0.1,0.3-0.2,0.4-0.3c0.3,0.2,0.3,0.3,0.7,0.3c0.6-0.4,0.4,0.2,1.1,0c0.2,0,0.2-0.2,0.6-0.3c0,0.1,0.2,0.4,0.2,0.3&#10;&#9;&#9;c0.4,0,0.4-0.1,0.6-0.3c0.3,0.2,0.3,0.3,0.7,0.3c0.2-0.2,0.2-0.2,0.6-0.3c0.2,0.2,0.1,0.3,0.5,0.3c0.1-0.1,0.2-0.2,0.4-0.3&#10;&#9;&#9;c0.4,0.1,0.3,0.3,0.9,0.3c0.2-0.3,0.2-0.2,0.6-0.3c0.1,0.3,0.1,0.2,0.3,0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.6,0.4,0.5,0.2,1.3,0.1&#10;&#9;&#9;c0.1,0.3,0.1,0.3,0.4,0.3c0.2-0.2,0.2-0.3,0.6-0.3c0.1,0.1,0.1,0.2,0.2,0.3c0,0.3,0,0.5,0,0.8c2.3-0.6,3.1-4.9,5.8-4.2&#10;&#9;&#9;c0.4,0.9,0.4,4.1,0.1,5.3c0,0,0,0.1,0.1,0.1c1.5,0,3.3,0.1,4.6,0.3c0.9,0.1,1.9-0.1,2.6-0.1c2.6-0.1,5,0,7.3,0&#10;&#9;&#9;c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0,0.1,0c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.2-0.4,2.3-0.4,3-0.2&#10;&#9;&#9;c0.1,0.5,0.2,1.8-0.2,2.1c-0.9,0-1.8,0-2.7,0c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5-0.4-2-0.1-3.4-0.3&#10;&#9;&#9;c-1.6,0-3.3,0-4.9-0.1c-1-0.3-5.7-0.4-6.8-0.1c0,0.1,0,0.1,0.1,0.2C598.2,376.9,598.4,377,598.7,377z M595.8,370.8&#10;&#9;&#9;c-0.7,0.8-1.4,1.6-2.1,2.5c0.1,0.1,0.1,0.2,0.2,0.3c0.5,0,2.8,0.3,3.1-0.1c0.3-0.6-0.4-2.1-0.6-2.6&#10;&#9;&#9;C596.3,370.8,596,370.8,595.8,370.8z M548.2,376.2c0,0.2,0,0.4-0.1,0.5c-0.6,1.1-2.2,1.1-2.6,2.5c0.5,0.4,0.9,0.8,1.4,1.2&#10;&#9;&#9;c0.4-0.2,4.8-1.8,4.8-1.8c-0.2-0.2-0.3-0.3-0.5-0.5c-0.6-0.1-1.3-0.1-1.9-0.2c0-0.6-0.1-1.1-0.1-1.7&#10;&#9;&#9;C548.8,376.2,548.5,376.2,548.2,376.2z M561.4,379.7c-0.7,0.3-1.8,0-2.4,0.3c-0.2,0.4-0.3,0.8-0.4,1.4c1.3,0.3,2,1,2.9,1.6&#10;&#9;&#9;c0.1,0,0.1-0.1,0.2-0.1C562.3,381.9,563,380.2,561.4,379.7z M558.3,379.7c-0.5,0.3-1,0.5-1.3,1c0.4,0.2,0.8,0.3,1.2,0.5&#10;&#9;&#9;C558.2,380.7,558.4,379.8,558.3,379.7z M557.6,384.1c0,1-0.2,1.8-1.2,1.9c0.1,1.4-0.8,1.3-1.6,2c-0.1,0.2-0.2,0.5-0.3,0.7&#10;&#9;&#9;c-0.4,0.6-1.3,0.9-2.2,1c0,0.1,0,0.3,0,0.4c0.1,0.5,0.2,1.1,0.3,1.6c1.1-0.3,1.7-1.4,2.6-1.8c0.4,0,0.7,0,1.1-0.1&#10;&#9;&#9;c1.3-0.4,4-2.7,4.1-4.2c-0.6-0.6-1.2-1.1-1.9-1.6C558.1,384.1,557.9,384.1,557.6,384.1z M539.4,397.8c-0.9,1.1-2.4,1.7-3.3,2.8&#10;&#9;&#9;c0,0.6,0.1,1.1,0.1,1.7c1.1-0.2,2.2-0.4,3.3-0.6c1.4,0,2.9,0.1,4.3,0.1c-0.1-0.1-0.2-0.3-0.4-0.4c-1-0.8-2.1-1.6-3.1-2.4&#10;&#9;&#9;C540,398.6,539.7,398.2,539.4,397.8z"
						fillRule="evenodd"
						clipRule="evenodd"
						fill="black"
						opacity="1"
						transform="matrix(1, 0, 0, 1, 0, 0)"
					/>
				</motion.svg>
			</motion.div>
		</>
	);
};

export default Paratrooper;
