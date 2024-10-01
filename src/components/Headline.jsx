const Headline = ({ firstName }) => {
	return (
		<div id="headline" className="flex items-center justify-center font-bold">
			<svg
				id="headline-svg"
				viewBox="0 0 800 100"
				xmlns="http://www.w3.org/2000/svg"
				// stroke="hsl(var(--foreground))"
        stroke="purple"
				strokeWidth="2"
				className="text-line">
				{/* <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="hsl(var(--muted-foreground))" />
            <stop offset="60%" stop-color="hsl(var(--muted-foreground))" />
            <stop offset="90%" stop-color="var(--primary_C)" />
            <stop offset="100%" stop-color="var(--primary_C)" />
          </linearGradient> */}
				<text
					x="50%"
					y="50%"
					dominantBaseline="middle"
					textAnchor="middle"
					fontSize="99"
					fill="white">
					{firstName}
				</text>
				{/* <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize = "99" fill="url(#Gradient1)">{firstName}</text> */}
			</svg>
		</div>
	);
};

export default Headline;
