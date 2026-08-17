import { ExternalLink } from "lucide-react";


interface LessonCardProps {
  title: string;
  description: string;
  level: string;
  link: string;
}


// Reusable component for displaying lesson information and external resources
export default function LessonCard({
  title,
  description,
  level,
  link,
}: LessonCardProps) {

  return (

    <div
      className="
      bg-gradient-to-br
      from-blue-50
      via-white
      to-cyan-50

      dark:from-gray-900
      dark:via-gray-950
      dark:to-blue-950

      border
      border-blue-200
      dark:border-gray-700

      hover:border-blue-600
      dark:hover:border-cyan-400

      shadow-md
      hover:shadow-xl

      rounded-xl

      p-6

      transition-all
      duration-300

      hover:-translate-y-2
      "
    >


      {/* Lesson title section */}
      <h2
        className="
        text-xl
        font-bold

        text-blue-600
        dark:text-cyan-400

        mb-3
        "
      >
        {title}
      </h2>



      {/* Lesson description section */}
      <p
        className="
        text-sm
        leading-relaxed

        text-gray-600
        dark:text-gray-300

        mb-5
        "
      >
        {description}
      </p>




      {/* Difficulty level badge */}
      <span
        className="
        inline-block

        px-3
        py-1

        rounded-full

        bg-blue-100
        text-blue-700

        dark:bg-cyan-900
        dark:text-cyan-300

        text-xs
        font-semibold
        "
      >
        {level}
      </span>




      {/* External learning resource link */}
      <a
        href={link}

        target="_blank"

        rel="noopener noreferrer"

        className="
        flex

        items-center

        gap-2

        mt-5

        text-blue-600

        dark:text-cyan-400

        font-semibold

        hover:text-cyan-600

        dark:hover:text-cyan-300

        hover:underline

        transition
        "
      >

        Start Lesson →

        <ExternalLink size={16}/>

      </a>


    </div>

  );

}