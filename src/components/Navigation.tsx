import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav className="bg-transparent p-6 pb-0">
      <div className="flex gap-1 bg-card/50 backdrop-blur-sm rounded-3xl p-2 w-fit ml-auto mr-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `px-6 py-3 text-sm font-medium transition-all duration-300 rounded-2xl ${
                isActive
                  ? "text-background bg-primary shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}