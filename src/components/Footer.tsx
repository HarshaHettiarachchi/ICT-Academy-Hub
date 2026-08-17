import { Link } from "react-router-dom";


export default function Footer() {

  return (

    <footer
      className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-blue-950
      via-slate-900
      to-indigo-950

      text-white
      "
    >


      {/* Decorative background glow effects */}
      <div
        className="
        absolute
        -top-20
        left-10

        w-56
        h-56

        bg-cyan-400/20

        rounded-full

        blur-3xl
        "
      ></div>


      <div
        className="
        absolute
        -bottom-20
        right-10

        w-64
        h-64

        bg-blue-500/20

        rounded-full

        blur-3xl
        "
      ></div>



      {/* Main footer content */}
      <div
        className="
        relative

        max-w-7xl
        mx-auto

        px-6
        py-10

        grid
        md:grid-cols-4

        gap-8
        "
      >


        {/* Brand information section */}
        <div className="md:col-span-2">

          <div
            className="
            flex
            items-center
            gap-3

            mb-4
            "
          >

            <div
              className="
              w-10
              h-10

              rounded-lg

              bg-gradient-to-br
              from-cyan-400
              to-blue-600

              flex
              items-center
              justify-center

              text-white

              font-bold

              shadow-lg
              "
            >

              {"</>"}

            </div>


            <h2
              className="
              text-xl
              font-bold
              "
            >
              ICT Academy Hub
            </h2>

          </div>


          <p
            className="
            text-blue-200

            text-sm

            max-w-sm

            leading-relaxed
            "
          >
            Learn web development, build projects
            and improve your skills with modern
            technologies.
          </p>

        </div>




        {/* Navigation links section */}
        <div>

          <h3
            className="
            text-base
            font-semibold

            text-cyan-300

            mb-3
            "
          >
            Quick Links
          </h3>


          <ul
            className="
            space-y-2

            text-sm
            "
          >

            <li>
              <Link
                to="/"
                className="
                text-blue-100

                hover:text-cyan-300

                transition
                "
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                to="/lessons"
                className="
                text-blue-100

                hover:text-cyan-300

                transition
                "
              >
                Lessons
              </Link>
            </li>


            <li>
              <Link
                to="/projects"
                className="
                text-blue-100

                hover:text-cyan-300

                transition
                "
              >
                Projects
              </Link>
            </li>


            <li>
              <Link
                to="/resources"
                className="
                text-blue-100

                hover:text-cyan-300

                transition
                "
              >
                Resources
              </Link>
            </li>

          </ul>

        </div>





        {/* Contact and social links section */}
        <div>

          <h3
            className="
            text-base
            font-semibold

            text-cyan-300

            mb-3
            "
          >
            Contact
          </h3>


          <p
            className="
            text-blue-100

            text-sm
            "
          >
            ✉ Get in touch
          </p>


          {/* Social media buttons */}
          <div
            className="
            flex
            gap-3

            mt-4
            "
          >

            <a
              href="#"
              className="
              w-9
              h-9

              rounded-lg

              bg-white/10

              flex
              items-center
              justify-center

              text-sm
              font-bold

              hover:bg-cyan-400/30

              hover:scale-110

              transition
              "
            >
              GH
            </a>


            <a
              href="#"
              className="
              w-9
              h-9

              rounded-lg

              bg-white/10

              flex
              items-center
              justify-center

              text-sm
              font-bold

              hover:bg-cyan-400/30

              hover:scale-110

              transition
              "
            >
              in
            </a>

          </div>

        </div>


      </div>




      {/* Footer copyright section */}
      <div
        className="
        border-t
        border-white/10

        py-3

        text-center

        text-blue-200

        text-xs
        "
      >

        © {new Date().getFullYear()} ICT Academy Hub.
        All rights reserved.

      </div>


    </footer>

  );

}