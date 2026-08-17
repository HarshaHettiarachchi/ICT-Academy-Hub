import { Link, NavLink } from "react-router-dom";
import { Code2, Sun, Moon } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";


// Navbar component handles page navigation and theme switching
export default function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);


  // Styles for active and inactive navigation links
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
    transition duration-300

    ${
      isActive
        ? "text-blue-600 dark:text-cyan-400 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
    }
    `;


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

        px-6
        py-4

        flex
        items-center
        justify-between
        "
      >


        {/* Website logo and brand information */}
        <Link
          to="/"

          className="
          flex
          items-center
          gap-3
          group
          "
        >

          <div
            className="
            w-12
            h-12

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

            group-hover:scale-110

            transition-transform
            "
          >

            <Code2 size={28}/>

          </div>


          <div>

            <h2
              className="
              text-xl
              font-bold

              text-gray-900
              dark:text-white
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


        </Link>





        {/* Main navigation menu */}
        <nav
          className="
          flex
          items-center
          gap-8
          "
        >

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>


          <NavLink
            to="/lessons"
            className={navLinkClass}
          >
            Lessons
          </NavLink>


          <NavLink
            to="/projects"
            className={navLinkClass}
          >
            Projects
          </NavLink>


          <NavLink
            to="/resources"
            className={navLinkClass}
          >
            Resources
          </NavLink>





          {/* Theme toggle button using Context API */}
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
          >

            {
              theme === "light"
              ? <Moon size={20}/>
              : <Sun size={20}/>
            }

          </button>





          {/* Link to Form validation page */}
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


      </div>


    </header>

  );

}