import { useState, useEffect, useRef } from 'react';
import ModeToggle from '@/components/ui/mode-toggle';
import MenuToggle from '@/components/ui/menu-toggle';
import NavButton from '@/components/ui/nav-button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useAnimate, stagger } from 'framer-motion';
import useWindowSize from '@/lib/hooks/use-window-size';

export type ILink = 'home' | 'about' | 'skills' | 'projects';
const links: ILink[] = ['home', 'about', 'skills', 'projects'];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const [currentSection, updateCurrent] = useState<ILink>('home');
  const [width] = useWindowSize();
  const navRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breakPoint = 600;

  useEffect(() => {
    updateCurrent(getActiveSection());
    const { current } = navRef;
    if (current) {
      const hideNav = () => {
        if (window.scrollY && width > breakPoint) current.style.top = '-100%';
      };

      const unhideNav = () => {
        current.style.top = '0';
      };

      const handleScroll = () => {
        unhideNav();
        updateCurrent(getActiveSection());
      };

      const handleScrollEnd = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          hideNav();
        }, 500);
      };

      const handleMouseMove = e => {
        if (e.clientY < 100) unhideNav();
        else hideNav();
      };

      window.onscroll = handleScroll;
      window.onscrollend = handleScrollEnd;
      window.onmousemove = handleMouseMove;

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scrollend', handleScrollEnd);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [width]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    console.log(e.currentTarget.value);
    const id = e.currentTarget.value;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return width < breakPoint ? (
    <nav
      ref={navRef}
      className='w-full fixed bg-background border-b flex items-start justify-between transition-[top] duration-300 ease-in-out z-40 py-2 px-4 top-0 [&>div]:flex [&>div]:flex-col [& >div]:justify-start '
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen} ref={scope}>
        <CollapsibleTrigger asChild>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </CollapsibleTrigger>
        <CollapsibleContent className='flex flex-col items-start'>
          {links.map((link, idx) => (
            <NavButton
              link={link}
              currentLink={currentSection}
              handleClick={handleClick}
              key={`${link}_${idx}`}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
      <ModeToggle />
    </nav>
  ) : (
    <nav
      ref={navRef}
      className='w-full fixed bg-background border-b flex flex-no-wrap gap-1 items-center justify-center transition-[top] duration-300 ease-in-out z-40 py-2 top-0'
    >
      {links.map((link, idx) => (
        <NavButton
          link={link}
          currentLink={currentSection}
          handleClick={handleClick}
          key={`${link}_${idx}`}
        />
      ))}
      <ModeToggle />
    </nav>
  );
}

function getActiveSection() {
  const sections = links.map(link => {
    const element = document.getElementById(link);
    const top = element ? element.getBoundingClientRect().top : 0;
    return { id: link, top };
  });

  const sortedNearestFirst = sections.sort(
    (a, b) => Math.abs(a.top) - Math.abs(b.top)
  );

  return sortedNearestFirst[0].id;
}

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimation = isOpen
      ? [
          [
            '.nav-btn',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            '.nav-btn',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimation,
    ]);
  }, [isOpen]);

  return scope;
}
