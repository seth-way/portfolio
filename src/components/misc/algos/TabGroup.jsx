export default function TabGroup({ position, tabs, clickHandler, activeID }) {
	const activeTabClass =
		' border-0 bg-background/40' + (position === 'left' ? ' text-primary_C' : ' text-secondary_C ');
	const defaultTabClass = ' text-foreground/40';
	return (
		<div className="h-full w-[12%] flex flex-col">
			{tabs.map(({ id, Icon }) => (
				<div
					id={id}
					key={id}
					className={
						'transition-all duration-500 flex-1 flex items-center justify-center border' +
						(id === activeID ? activeTabClass : defaultTabClass)
					}
					onClick={clickHandler}>
					{<Icon />}
				</div>
			))}
		</div>
	);
}
