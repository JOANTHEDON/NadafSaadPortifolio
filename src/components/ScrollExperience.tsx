import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export function ScrollExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Comic-Themed Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-2 sm:h-2.5 bg-black/60 pointer-events-none border-b-2 border-black">
        <div
          className="h-full bg-gradient-to-r from-[#FFE81F] via-[#FF7B00] to-[#FF2A2A] transition-all duration-150 ease-out shadow-[0_0_8px_#FFE81F]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Comic Rocket "Scroll To Top" Launch Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group relative flex flex-col items-center justify-center p-3 sm:p-3.5 bg-[#FFE81F] hover:bg-[#FFD000] active:scale-95 text-black border-3 sm:border-4 border-black rounded-2xl shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        >
          {/* Animated Comic Exhaust / Fire Effect */}
          <div className="relative">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-8deg] fill-black" />
          </div>

          {/* Comic Progress Percentage Tag */}
          <span className="font-bangers text-[10px] sm:text-xs tracking-wider mt-0.5 font-bold">
            {Math.round(scrollProgress)}%
          </span>

          {/* Comic Tooltip Burst */}
          <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center pointer-events-none">
            <div className="bg-[#FF2A2A] text-white font-bangers text-[11px] sm:text-xs px-2.5 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000000] whitespace-nowrap rotate-[-3deg] uppercase">
              🚀 LAUNCH TOP!
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
