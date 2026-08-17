interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

// Reusable component for displaying learning features with image and description
export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {

  return (
    <div
      className="
      bg-white
      dark:bg-gray-900

      border
      border-blue-200
      dark:border-gray-700

      hover:border-blue-600
      dark:hover:border-cyan-400

      shadow-sm
      hover:shadow-xl

      rounded-xl

      overflow-hidden

      transition-all
      duration-300

      hover:-translate-y-1
      "
    >

      {/* Feature image display section */}
      <div
        className="
        w-full
        h-48
        overflow-hidden

        bg-blue-50
        dark:bg-gray-800
        "
      >
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-full
          object-cover

          transition-transform
          duration-500

          hover:scale-110
          "
        />
      </div>


      {/* Feature information content section */}
      <div className="p-5">

        <h3
          className="
          text-lg
          font-bold

          text-blue-600
          dark:text-cyan-400

          mb-2
          "
        >
          {title}
        </h3>


        <p
          className="
          text-sm

          text-gray-600
          dark:text-gray-300

          leading-relaxed
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}