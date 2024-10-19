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
      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="flex flex-row justify-between">
              <Link href={project.link} className="text-blue-500">
                Repository
              </Link>
              <Link href={project.link} className="text-blue-500">
                Demo
              </Link>
            </div>
            <hr className="my-4 border-t" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentProjects;
