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

    // 2. Track mouse position
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
      {/* Outer Comic Reticle Ring */}
      <div
        ref={ringRef}
        className={`absolute rounded-full border-2 border-black transition-all duration-75 flex items-center justify-center ${
          isHovered 
            ? 'w-10 h-10 bg-[#FF2A2A]/40 scale-125 border-[#FF2A2A]' 
            : 'w-7 h-7 bg-[#FFE81F]/20 border-black'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          willChange: 'transform',
          opacity: 0,
          boxShadow: isHovered ? '2px 2px 0px #000' : '1px 1px 0px #000',
        }}
      >
        {/* Reticle crosshair points */}
        <div className={`absolute w-2 h-0.5 left-0 ${isHovered ? 'bg-[#FF2A2A]' : 'bg-[#FFE81F]'}`} />
        <div className={`absolute w-2 h-0.5 right-0 ${isHovered ? 'bg-[#FF2A2A]' : 'bg-[#FFE81F]'}`} />
        <div className={`absolute h-2 w-0.5 top-0 ${isHovered ? 'bg-[#FF2A2A]' : 'bg-[#FFE81F]'}`} />
        <div className={`absolute h-2 w-0.5 bottom-0 ${isHovered ? 'bg-[#FF2A2A]' : 'bg-[#FFE81F]'}`} />
      </div>

      {/* Center Comic Crosshair Dot */}
      <div
        ref={dotRef}
        className={`absolute w-2 h-2 rounded-full border border-black transition-colors duration-150 ${
          isHovered ? 'bg-[#FF2A2A]' : 'bg-[#FFE81F]'
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
