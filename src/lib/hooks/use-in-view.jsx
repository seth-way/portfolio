
import { useEffect, useState } from "react";

export default function useInView(element){
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0.5 }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};
