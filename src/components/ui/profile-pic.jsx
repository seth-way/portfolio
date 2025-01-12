import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import headShot from '@/assets/images/headShot.jpg';

export default function ProfilePic() {
	const { scrollY } = useScroll();

	const rotation1 = useSpring(scrollY, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});

	const rotation1R = useTransform(rotation1, value => -value);

	const rotation2 = useSpring(scrollY, {
		stiffness: 140,
		damping: 180,
		mass: 0.6
	});

	const rotation2R = useTransform(rotation2, value => -value);

	const rotation3 = useSpring(scrollY, {
		stiffness: 500,
		damping: 200,
		mass: 0.9
	});

	const rotation4 = useSpring(scrollY, {
		stiffness: 600,
		damping: 150,
		mass: 0.3
	});

	const rotation4R = useTransform(rotation4, value => -value);

	return (
		<div
			id="profile-pic-border"
			className="w-[min(50vh,50vw)] min-w-124 max-w-80 aspect-square relative">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="absolute inset-0">
				<defs>
					<clipPath id="circleClip">
						<circle cx="150" cy="150" r="120" />
					</clipPath>
					<linearGradient id="bgCircle" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.5 }} />
						<stop offset="50%" style={{ stopColor: 'currentColor', stopOpacity: 0.3 }} />
						<stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.5 }} />
					</linearGradient>
					<linearGradient id="semiCircle1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" style={{ stopColor: 'var(--alt_C)', stopOpacity: 0 }} />
						<stop offset="45%" style={{ stopColor: 'var(--alt_C)', stopOpacity: 0.75 }} />
						<stop offset="100%" style={{ stopColor: 'var(--alt_C)', stopOpacity: 0.75 }} />
					</linearGradient>
					<linearGradient id="semiCircle2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" style={{ stopColor: 'var(--accent_C)', stopOpacity: 0.75 }} />
						<stop offset="20%" style={{ stopColor: 'var(--accent_C)', stopOpacity: 0.75 }} />
						<stop offset="100%" style={{ stopColor: 'var(--accent_C)', stopOpacity: 0 }} />
					</linearGradient>
					<linearGradient id="semiCircle3" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" style={{ stopColor: 'var(--primary_C)', stopOpacity: 0 }} />
						<stop offset="20%" style={{ stopColor: 'var(--primary_C)', stopOpacity: 0.75 }} />
						<stop offset="100%" style={{ stopColor: 'var(--primary_C)', stopOpacity: 0.75 }} />
					</linearGradient>
					<radialGradient id="semiCircle4" cx="0.9" cy="0.9" r="0.7">
						<stop offset="0%" style={{ stopColor: 'var(--secondary_C)', stopOpacity: 0.75 }} />
						<stop offset="100%" style={{ stopColor: 'var(--secondary_C)', stopOpacity: 0 }} />
					</radialGradient>
				</defs>
				<image
					x="0"
					y="0"
					height="100%"
					width="100%"
					id="profile-pic"
					xlinkHref={headShot}
					alt="Headshot of developer who made this page"
					clipPath="url(#circleClip)"
					preserveAspectRatio="xMidYMid slice"></image>
				<motion.circle
					cx="150"
					cy="150"
					r="140"
					stroke="url(#bgCircle)"
					fill="none"
					strokeWidth="12"
					opacity={0.3}
					style={{ rotate: rotation1R, originX: 'center', originY: 'center' }}
				/>
				<motion.g style={{ rotate: rotation1, originX: 'center', originY: 'center' }}>
					<motion.path
						d="M10,150 A140,140 0 0,0 290,150"
						fill="none"
						stroke="url(#semiCircle1)"
						strokeWidth="12"
						strokeLinecap="round"
					/>
				</motion.g>
				<motion.g style={{ rotate: rotation2R, originX: 'center', originY: 'center' }}>
					<path
						d="M10,150 A140,140 0 0,1 290,150"
						fill="none"
						stroke="url(#semiCircle2)"
						strokeWidth="12"
						strokeLinecap="round"
					/>
				</motion.g>
				<motion.g style={{ rotate: rotation3, originX: 'center', originY: 'center' }}>
					<path
						d="M290,150 A140,140 0 0,1 10,150"
						fill="none"
						stroke="url(#semiCircle3)"
						strokeWidth="12"
						strokeLinecap="round"
					/>
				</motion.g>
				<motion.g style={{ rotate: rotation4R, originX: 'center', originY: 'center' }}>
					<path
						d="M290,150 A140,140 0 0,1 150,290"
						fill="none"
						stroke="url(#semiCircle4)"
						strokeWidth="12"
						strokeLinecap="round"
					/>
				</motion.g>
			</svg>
		</div>
	);
}
