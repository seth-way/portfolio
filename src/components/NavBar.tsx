import { useState, useEffect, useRef } from 'react';
import ModeToggle from '@/components/ui/mode-toggle';
import NavButton from './ui/nav-button';

export type ILink = 'home' | 'about' | 'projects' | 'skills';
const links: ILink[] = ['home', 'about', 'projects', 'skills'];

export default function NavBar() {
  const [currentSection, updateCurrent] = useState<ILink>('home');
  const navRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    updateCurrent(getActiveSection());
    const { current } = navRef;
    if (current) {
      const hideNav = () => {
        if (window.scrollY) current.style.top = '-100%';
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
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    console.log(e.currentTarget.value);
    const id = e.currentTarget.value;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className='w-full fixed bg-background border-b flex flex-no-wrap gap-1 items-center justify-center transition-[top] duration-300 ease-in-out z-40 py-2'
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
