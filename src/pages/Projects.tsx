import { useEffect, useState } from "react";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";


// GitHub repository data structure
interface Repository {
  id: number;
  name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}


// Projects page component
export default function Projects() {

  // Store fetched GitHub repositories
  const [projects, setProjects] = useState<Repository[]>([]);

  // Store search input value
  const [search, setSearch] = useState("");


  // Fetch project data from GitHub API when page loads
  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const response = await fetch(
          "https://api.github.com/users/facebook/repos"
        );

        const data = await response.json();

        setProjects(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProjects();

  }, []);


  // Define table column configuration
  const columns: ColumnDef<Repository>[] = [

    {
      accessorKey: "name",
      header: "Project Name",
    },

    {
      accessorKey: "language",
      header: "Language",
    },

    {
      accessorKey: "stargazers_count",
      header: "Stars",
    },

    {
      accessorKey: "forks_count",
      header: "Forks",
    },

  ];



  // Create React table instance
  const table = useReactTable({

    data: projects,

    columns,

    state: {
      globalFilter: search,
    },

    onGlobalFilterChange: setSearch,

    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

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


      {/* Page heading */}
      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-8
        text-blue-900
        dark:text-white
        "
      >
        Open Source Projects
      </h1>



      <div className="max-w-6xl mx-auto">


        {/* Repository search input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search repositories..."
          className="
          w-full
          mb-6
          p-3
          rounded-xl
          border
          border-blue-200
          dark:border-gray-700
          bg-white
          dark:bg-gray-900
          text-gray-900
          dark:text-white
          "
        />



        {/* Responsive project table */}
        <div
          className="
          overflow-x-auto
          rounded-xl
          shadow-lg
          border
          border-blue-100
          dark:border-gray-800
          "
        >

          <table className="w-full text-left">


            {/* Table header */}
            <thead className="bg-blue-700 text-white">

              {
                table.getHeaderGroups().map((headerGroup) => (

                  <tr key={headerGroup.id}>

                    {
                      headerGroup.headers.map((header) => (

                        <th
                          key={header.id}
                          className="p-4"
                        >

                          {
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                          }

                        </th>

                      ))
                    }

                  </tr>

                ))
              }

            </thead>



            {/* Table body */}
            <tbody className="bg-white dark:bg-gray-900">

              {
                table.getRowModel().rows.map((row) => (

                  <tr
                    key={row.id}
                    className="
                    border-b
                    dark:border-gray-700
                    "
                  >

                    {
                      row.getVisibleCells().map((cell) => (

                        <td
                          key={cell.id}
                          className="
                          p-4
                          text-gray-700
                          dark:text-gray-300
                          "
                        >

                          {
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          }

                        </td>

                      ))
                    }

                  </tr>

                ))
              }

            </tbody>


          </table>

        </div>


      </div>


    </div>

  );

}