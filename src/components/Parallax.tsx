import { useRef, useEffect, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const element = elementRef.current;
        const elementRect = element.getBoundingClientRect();
        const elementCenter = elementRect.top + elementRect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const distance = elementCenter - windowCenter;
        const parallaxOffset = (distance * offset) / 1000;
        setYOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${yOffset}px)`,
        transition: 'transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}
