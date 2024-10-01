const Headline = ({ firstName }) => {
	return (
		<svg
			id="headline-svg"
			viewBox="0 0 800 100"
			xmlns="http://www.w3.org/2000/svg"
			stroke="hsl(var(--foreground))"
			strokeWidth="2"
			className="text-line">
			<linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stop-color="hsl(var(--muted-foreground))" />
				<stop offset="60%" stop-color="hsl(var(--muted-foreground))" />
				<stop offset="90%" stop-color="var(--primary_C)" />
				<stop offset="100%" stop-color="var(--primary_C)" />
			</linearGradient>
			<text
				x="50%"
				y="53%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="92"
				fill="url(#Gradient1)">
				{firstName}
			</text>
		</svg>
	);
};

export default Headline;
