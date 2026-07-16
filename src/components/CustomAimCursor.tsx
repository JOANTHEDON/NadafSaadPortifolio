import { useEffect, useState, useRef } from 'react';

export default function CustomAimCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Add global cursor-none styling to body and interactive elements
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      body, a, button, select, input, textarea, [role="button"], iframe {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    // 2. Track mouse position and update DOM positions directly (zero latency)
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      
      if (isHidden) {
        setIsHidden(false);
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 3. Handle hover checks on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer');

      setIsHovered(isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.head.removeChild(styleElement);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHidden]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden select-none">
      {/* Outer Aim Ring */}
      <div
        ref={ringRef}
        className={`absolute rounded-full border border-primary transition-all duration-75 flex items-center justify-center ${
          isHovered 
            ? 'w-10 h-10 border-purple-500 bg-purple-500/10 scale-110' 
            : 'w-7 h-7 border-primary/70 bg-transparent'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          willChange: 'transform',
          opacity: 0,
        }}
      >
        {/* Reticle lines inside outer ring (crosshair) */}
        <div className={`absolute w-1.5 h-[1px] left-0 bg-current opacity-60 ${isHovered ? 'text-purple-400' : 'text-primary'}`} />
        <div className={`absolute w-1.5 h-[1px] right-0 bg-current opacity-60 ${isHovered ? 'text-purple-400' : 'text-primary'}`} />
        <div className={`absolute h-1.5 w-[1px] top-0 bg-current opacity-60 ${isHovered ? 'text-purple-400' : 'text-primary'}`} />
        <div className={`absolute h-1.5 w-[1px] bottom-0 bg-current opacity-60 ${isHovered ? 'text-purple-400' : 'text-primary'}`} />
      </div>

      {/* Center Aim Dot */}
      <div
        ref={dotRef}
        className={`absolute w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
          isHovered ? 'bg-purple-400 shadow-glow' : 'bg-primary shadow-glow'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          willChange: 'transform',
          opacity: 0,
        }}
      />
    </div>
  );
}
