import Link from "next/link";
import React from "react";
import { Project } from "../types/general";

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects: React.FC<RecentProjectsProps> = ({ projects }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold font-italics mb-6">Recent Projects</h2>
      <ul className="space-y-8 mt-10">
        {projects.map((project, index) => (
          <li key={index}>
            <h3 className="text-2xl font-italics">{project.title}</h3>
            <p className="mt-2 text-md">{project.description}</p>
            <div className="flex flex-row justify-between mt-4">
              <Link
                href={project.link}
                className="text-blue-500 dark:text-white"
              >
                Repository
              </Link>
              <Link
                href={project.link}
                className="text-blue-500 dark:text-white"
              >
                Demo
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentProjects;
