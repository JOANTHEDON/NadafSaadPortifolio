import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState<boolean>(() => {
    return localStorage.getItem("theme-mode") === "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      className="group relative flex items-center justify-center p-2 sm:p-2.5 bg-[#202534] hover:bg-[#2c3347] active:scale-95 text-gray-200 hover:text-white border-2 border-black rounded-xl shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-all duration-200 cursor-pointer select-none"
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-[#FFE81F] fill-[#FFE81F] transition-transform duration-300 group-hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-[#FFE81F] fill-[#FFE81F] transition-transform duration-300 group-hover:rotate-45" />
      )}

      {/* Floating Comic Mode Badge */}
      <div className="absolute -top-3 -right-2 bg-[#FF2A2A] text-white font-bangers text-[10px] px-1.5 py-0.2 rounded border border-black shadow-[1.5px_1.5px_0px_#000] rotate-[8deg] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
        {isLight ? "NIGHT" : "DAY"}
      </div>
    </button>
  );
}
