import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import AskQuestion from "./pages/AskQuestion";


// Main application component with routing setup
export default function App() {

  return (

    <BrowserRouter>

      {/* Main application wrapper with global theme styles */}
      <div
        className="
        min-h-screen
        bg-white
        text-gray-900
        dark:bg-gray-950
        dark:text-white
        transition-colors
        duration-300
        "
      >

        {/* Common navigation bar */}
        <Navbar />


        {/* Application route configuration */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/lessons"
            element={<Lessons />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/resources"
            element={<Resources />}
          />

          <Route
            path="/ask-question"
            element={<AskQuestion />}
          />

        </Routes>


        {/* Common footer section */}
        <Footer />

      </div>

    </BrowserRouter>

  );

}