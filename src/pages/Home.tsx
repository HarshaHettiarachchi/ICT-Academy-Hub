import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import RoadmapSection from "../components/RoadmapSection";
import LearningCard from "../components/LearningCard";

import frontendImg from "../assets/frontend.jpg";
import backendImg from "../assets/backend.jpg";
import deploymentImg from "../assets/deployment.jpg";

export default function Home() {
  return (
    <div className="pt-20 bg-white text-gray-900 dark:bg-gray-950">
      <HeroSection />

      <section className="py-16 px-6 bg-white dark:bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-10">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Frontend Development"
            description="Learn HTML, CSS, JavaScript, React and modern UI development."
            image={frontendImg}
          />

          <FeatureCard
            title="Backend & Database"
            description="Understand servers, APIs, databases and application logic."
            image={backendImg}
          />

          <FeatureCard
            title="Deployment"
            description="Learn how to deploy websites and make projects available online."
            image={deploymentImg}
          />
        </div>
      </section>

      <section>
        <RoadmapSection />
      </section>

      <section className="py-16 px-6 bg-white dark:bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-10">
          Learning Path
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <LearningCard title="HTML & CSS" />
          <LearningCard title="JavaScript" />
          <LearningCard title="React & TypeScript" />
        </div>
      </section>

      <section className="py-14 px-6 bg-white dark:bg-gray-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
          Ready to Start Learning?
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Start your web development journey and build real projects with modern
          technologies.
        </p>

        <Link
          to="/lessons"
          className="inline-block bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Learning
        </Link>
      </section>
    </div>
  );
}