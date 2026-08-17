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

export default function App() {
  return (
    <BrowserRouter basename="/ICT-Academy-Hub">
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ask-question" element={<AskQuestion />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}