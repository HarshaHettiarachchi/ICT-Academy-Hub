import { Link, NavLink } from "react-router-dom";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useContext, useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      transition duration-300
      ${
        isActive
          ? "text-blue-600 dark:text-cyan-400 font-semibold"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
      }
    `;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white
        dark:bg-gray-950
        border-b
        border-blue-100
        dark:border-gray-800
        shadow-md
        transition-colors
        duration-300
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-20
          px-4
          sm:px-6
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-3
            group
            min-w-0
          "
        >
          <div
            className="
              w-11
              h-11
              sm:w-12
              sm:h-12
              shrink-0
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-cyan-500
              flex
              items-center
              justify-center
              text-white
              shadow-lg
              transition-transform
              group-hover:scale-110
            "
          >
            <Code2 size={26} />
          </div>

          <div className="hidden sm:block">
            <h2
              className="
                text-xl
                font-bold
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              ICT Academy Hub
            </h2>

            <p
              className="
                text-xs
                text-gray-500
                dark:text-gray-400
              "
            >
              Learn • Build • Deploy
            </p>
          </div>

          <div className="sm:hidden">
            <h2
              className="
                text-base
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              ICT Academy
            </h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/lessons" className={navLinkClass}>
            Lessons
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>

          <button
            onClick={toggleTheme}
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-gray-100
              dark:bg-gray-800
              text-gray-700
              dark:text-yellow-400
              hover:scale-110
              transition
            "
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <Link
            to="/ask-question"
            className="
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-5
              py-2.5
              text-white
              font-medium
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Ask Question
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div
          className="
            flex
            lg:hidden
            items-center
            gap-1
            shrink-0
          "
        >
          <button
            onClick={toggleTheme}
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-gray-100
              dark:bg-gray-800
              text-gray-700
              dark:text-yellow-400
              transition
            "
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              w-10
              h-10
              rounded-lg
              flex
              items-center
              justify-center
              text-gray-700
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-gray-800
              transition
            "
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="
            lg:hidden
            border-t
            border-blue-100
            dark:border-gray-800
            bg-white
            dark:bg-gray-950
            px-6
            py-5
            flex
            flex-col
            gap-5
            shadow-lg
          "
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/lessons"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Lessons
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Projects
          </NavLink>

          <NavLink
            to="/resources"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Resources
          </NavLink>

          <Link
            to="/ask-question"
            onClick={closeMenu}
            className="
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-5
              py-3
              text-white
              font-medium
              text-center
              shadow-lg
            "
          >
            Ask Question
          </Link>
        </nav>
      )}
    </header>
  );
}