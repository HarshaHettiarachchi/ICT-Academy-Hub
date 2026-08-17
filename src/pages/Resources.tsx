import { useState } from "react";


// Resource data structure
interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
}


// Resources page component
export default function Resources() {

  // Search input state
  const [search, setSearch] = useState("");

  // Selected resource category state
  const [category, setCategory] = useState("All");



  // Available learning resources
  const resources: Resource[] = [

    {
      id: 1,
      title: "MDN Web Docs",
      description: "Complete documentation for HTML, CSS and JavaScript.",
      category: "Frontend",
      link: "https://developer.mozilla.org",
    },

    {
      id: 2,
      title: "React Documentation",
      description: "Learn React components, hooks and modern frontend development.",
      category: "Frontend",
      link: "https://react.dev",
    },

    {
      id: 3,
      title: "Node.js Guide",
      description: "Learn backend development using Node.js and APIs.",
      category: "Backend",
      link: "https://nodejs.org",
    },

    {
      id: 4,
      title: "Git & GitHub",
      description: "Learn version control and manage your projects professionally.",
      category: "Tools",
      link: "https://github.com",
    },

    {
      id: 5,
      title: "TypeScript Handbook",
      description: "Understand TypeScript types and advanced concepts.",
      category: "Frontend",
      link: "https://typescriptlang.org",
    },

    {
      id: 6,
      title: "REST API Guide",
      description: "Learn how frontend applications communicate with servers.",
      category: "Backend",
      link: "https://restfulapi.net",
    },

  ];



  // Filter resources based on search and category
  const filteredResources = resources.filter((item) => {

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      item.category === category;


    return matchesSearch && matchesCategory;

  });



  return (

    <div
      className="
      min-h-screen
      pt-24
      px-6
      pb-20
      bg-white
      dark:bg-gray-950
      "
    >


      {/* Page title */}
      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-4
        text-blue-900
        dark:text-white
        "
      >
        Learning Resources
      </h1>



      {/* Page description */}
      <p
        className="
        text-center
        text-gray-600
        dark:text-gray-300
        mb-10
        "
      >
        Useful websites and tools to improve your web development skills.
      </p>




      <div className="max-w-6xl mx-auto">


        {/* Search and category filtering section */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          gap-4
          mb-8
          "
        >

          {/* Search resources */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="
            flex-1
            p-3
            rounded-xl
            border
            border-blue-200
            dark:border-gray-700
            bg-white
            dark:bg-gray-900
            dark:text-white
            "
          />


          {/* Category filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
            p-3
            rounded-xl
            border
            border-blue-200
            dark:border-gray-700
            bg-white
            dark:bg-gray-900
            dark:text-white
            "
          >

            <option>All</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Tools</option>

          </select>


        </div>




        {/* Resource cards */}
        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          {
            filteredResources.map((resource) => (

              <div
                key={resource.id}
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
                rounded-xl
                p-6
                shadow-md
                hover:shadow-xl
                transition
                hover:-translate-y-2
                "
              >


                {/* Resource title */}
                <h2
                  className="
                  text-xl
                  font-bold
                  text-blue-600
                  dark:text-cyan-400
                  mb-3
                  "
                >
                  {resource.title}
                </h2>



                {/* Resource description */}
                <p
                  className="
                  text-gray-600
                  dark:text-gray-300
                  text-sm
                  leading-relaxed
                  mb-4
                  "
                >
                  {resource.description}
                </p>



                {/* Resource category */}
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
                  {resource.category}
                </span>



                {/* External resource link */}
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  block
                  mt-5
                  text-blue-600
                  dark:text-cyan-400
                  font-semibold
                  hover:underline
                  "
                >
                  Visit Resource →
                </a>


              </div>

            ))
          }


        </div>


      </div>


    </div>

  );

}