import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        flex
        items-center
        overflow-hidden
        px-6
        py-16
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

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        <div className="text-white">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Learn Web Development

            <span className="block text-cyan-300">
              From Basic to Advanced
            </span>
          </h1>

          <p
            className="
              text-base
              md:text-lg
              text-blue-100
              dark:text-gray-300
              mb-8
              leading-relaxed
              max-w-xl
            "
          >
            ICT Academy Hub helps you master web development step by step.
            Learn HTML, CSS, JavaScript, React and modern technologies through
            practical projects.
          </p>

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
              hover:scale-105
              transition
            "
          >
            Start Learning →
          </Link>
        </div>

        <div
          className="
            bg-white/10
            dark:bg-black/30
            backdrop-blur-lg
            border
            border-white/20
            rounded-2xl
            p-5
            shadow-2xl
            w-full
          "
        >
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 bg-red-400 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-400 rounded-full" />
          </div>

          <pre
            className="
              text-xs
              sm:text-sm
              text-blue-100
              dark:text-gray-300
              leading-relaxed
              whitespace-pre-wrap
              overflow-x-auto
            "
          >
{`const developer = {
  skills: [
    "HTML",
    "CSS",
    "React"
  ],

  build() {
    return "Website";
  }
};`}
          </pre>

          <div className="flex flex-wrap gap-2 mt-5">
            {["HTML", "CSS", "JavaScript", "React"].map((tech) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}