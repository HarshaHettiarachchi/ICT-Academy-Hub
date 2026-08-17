interface LearningCardProps {
  title: string;
}


// Reusable card component for displaying learning path topics
export default function LearningCard({
  title,
}: LearningCardProps) {

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


      {/* Learning topic title */}
      <h3
        className="
        text-xl
        font-bold

        text-blue-600
        dark:text-cyan-400

        mb-3
        "
      >
        {title}
      </h3>



      {/* Short description about the learning content */}
      <p
        className="
        text-gray-600
        dark:text-gray-300

        leading-relaxed

        text-sm
        "
      >
        Explore concepts, tutorials, and practical examples to improve your
        skills.
      </p>




      {/* Action button for exploring more content */}
      <button
        className="
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
        Explore More →
      </button>


    </div>

  );

}