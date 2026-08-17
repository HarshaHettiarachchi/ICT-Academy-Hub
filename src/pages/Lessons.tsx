import LessonCard from "../components/LessonCard";


// Lessons page displaying available web development learning resources
export default function Lessons() {


  // Lesson data with external learning resources
  const lessons = [
    {
      title: "HTML Basics",
      description: "Learn website structure, elements and semantic HTML.",
      level: "Beginner",
      link: "https://www.w3schools.com/html/",
    },

    {
      title: "CSS Styling",
      description: "Learn layouts, colors, animations and responsive design.",
      level: "Beginner",
      link: "https://www.w3schools.com/css/",
    },

    {
      title: "JavaScript",
      description: "Understand programming logic and web interactions.",
      level: "Intermediate",
      link: "https://javascript.info/",
    },

    {
      title: "React Development",
      description: "Build modern user interfaces using React components.",
      level: "Advanced",
      link: "https://react.dev/",
    },

    {
      title: "TypeScript",
      description: "Write safer and maintainable frontend applications.",
      level: "Advanced",
      link: "https://www.typescriptlang.org/docs/",
    },
  ];


  return (

    <div
      className="
      min-h-screen
      pt-24
      px-6
      pb-20
      "
    >


      {/* Page heading */}
      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-10
        text-blue-900
        dark:text-white
        "
      >
        Web Development Lessons
      </h1>




      {/* Lesson cards display section */}
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
        "
      >

        {
          lessons.map((lesson) => (

            <LessonCard
              key={lesson.title}
              title={lesson.title}
              description={lesson.description}
              level={lesson.level}
              link={lesson.link}
            />

          ))
        }

      </div>


    </div>

  );

}