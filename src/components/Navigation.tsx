import { useEffect, useState } from "react";
import { User, FileText, Gamepad2, Send } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "resume", label: "RESUME", icon: FileText },
  { id: "projects", label: "PROJECTS", icon: Gamepad2 },
  { id: "contact", label: "CONTACT", icon: Send },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navItems
        .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      if (sectionElements.length === 0) return;

      const scrollPosition = window.scrollY + 180;
      let current = sectionElements[0].id;

      for (const section of sectionElements) {
        if (section.el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      // If scrolled close to bottom, highlight the last section (contact)
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60
      ) {
        current = sectionElements[sectionElements.length - 1].id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-40 p-3 sm:p-6 pb-2 backdrop-blur-md bg-transparent">
      <div className="flex items-center justify-center sm:justify-end">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-1.5 sm:p-2.5 shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] w-full sm:w-auto overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bangers tracking-wider uppercase flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-black transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#FFE81F] text-black shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000] -translate-y-0.5 sm:-translate-y-1 font-bold"
                    : "bg-[#202534] text-gray-300 hover:text-white hover:bg-[#2c3347] shadow-[1px_1px_0px_#000000] sm:shadow-[2px_2px_0px_#000000]"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Integrated Comic Light/Dark Mode Switcher inside nav pills */}
          <div className="pl-1 border-l-2 border-black/40 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
