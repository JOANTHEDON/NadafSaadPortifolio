import { NavLink } from "react-router-dom";
import { User, FileText, Gamepad2, Send } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "ABOUT", icon: User },
  { path: "/resume", label: "RESUME", icon: FileText },
  { path: "/portfolio", label: "MISSIONS", icon: Gamepad2 },
  { path: "/contact", label: "CONTACT", icon: Send },
];

export function Navigation() {
  return (
    <nav className="p-3 sm:p-6 pb-2">
      <div className="flex items-center justify-center sm:justify-end">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#181c26] border-3 sm:border-4 border-black rounded-2xl p-1.5 sm:p-2.5 shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] w-full sm:w-auto overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex-1 sm:flex-initial px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bangers tracking-wider uppercase flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-black transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#FFE81F] text-black shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000] -translate-y-0.5 sm:-translate-y-1 font-bold"
                      : "bg-[#202534] text-gray-300 hover:text-white hover:bg-[#2c3347] shadow-[1px_1px_0px_#000000] sm:shadow-[2px_2px_0px_#000000]"
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
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
