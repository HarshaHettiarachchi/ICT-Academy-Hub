import { Link } from "react-router-dom";


export default function HeroSection() {

  return (

    <section
      className="
      relative

      h-[calc(100vh-80px)]

      flex
      items-center

      overflow-hidden

      px-6

      bg-gradient-to-br
      from-blue-950
      via-blue-800
      to-sky-600

      dark:from-gray-950
      dark:via-blue-950
      dark:to-black

      transition-colors
      duration-500
      "
    >


      {/* Decorative background glow effects */}
      <div
        className="
        absolute
        top-0
        left-10

        w-64
        h-64

        bg-blue-400/20

        rounded-full

        blur-3xl
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-10

        w-72
        h-72

        bg-cyan-300/20

        rounded-full

        blur-3xl
        "
      />



      {/* Main hero content layout */}
      <div
        className="
        relative

        max-w-6xl

        mx-auto

        w-full

        grid

        md:grid-cols-2

        gap-8

        items-center
        "
      >


        {/* Hero text and call-to-action section */}
        <div className="text-white">


          <h1
            className="
            text-4xl
            md:text-5xl

            font-bold

            leading-tight

            mb-4
            "
          >

            Learn Web Development


            <span
              className="
              block

              text-cyan-300
              "
            >

              From Basic to Advanced

            </span>

          </h1>



          <p
            className="
            text-base
            md:text-lg

            text-blue-100
            dark:text-gray-300

            mb-6

            leading-relaxed
            "
          >

            ICT Academy Hub helps you master web development step by step.
            Learn HTML, CSS, JavaScript, React and modern technologies
            through practical projects.

          </p>




          {/* Navigation button to lessons page */}
          <Link
            to="/lessons"

            className="
            inline-block

            bg-white

            dark:bg-cyan-400

            text-blue-700

            dark:text-gray-900

            font-semibold

            px-7

            py-3

            rounded-xl

            hover:bg-blue-50

            dark:hover:bg-cyan-300

            transition
            "
          >

            Start Learning →

          </Link>


        </div>





        {/* Developer code preview card */}
        <div
          className="
          bg-white/10

          dark:bg-black/30

          backdrop-blur-lg

          border

          border-white/20

          rounded-2xl

          p-4

          shadow-2xl
          "
        >


          {/* Code editor style header */}
          <div className="flex gap-2 mb-3">

            <span className="w-3 h-3 bg-red-400 rounded-full"></span>

            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>

            <span className="w-3 h-3 bg-green-400 rounded-full"></span>

          </div>




          {/* Example developer code */}
          <pre
            className="
            text-xs
            md:text-sm

            text-blue-100

            dark:text-gray-300

            leading-relaxed
            "
          >
{`const developer = {
 skills:[
  "HTML",
  "CSS",
  "React"
 ],

 build(){
  return "Website";
 }
};`}
          </pre>





          {/* Technology badges */}
          <div
            className="
            flex
            flex-wrap

            gap-2

            mt-4
            "
          >

            {
              [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
              ].map((tech)=>(

                <span
                  key={tech}

                  className="
                  bg-white/20

                  text-white

                  px-3

                  py-1

                  rounded-full

                  text-xs
                  "
                >

                  {tech}

                </span>

              ))
            }

          </div>


        </div>


      </div>


    </section>

  );

}