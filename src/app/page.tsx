"use client";
import Image from "next/image";
import RecentProjects from "./components/RecentProjects";
import { Project } from "./types/general";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const projects: Project[] = [
    {
      title: "Game Recommendation System",
      description:
        "Built using Next.js, TailwindCSS, and Supabase. It uses a custom trained model to recommend games to users based on their preferences.",
      link: "https://www.google.com",
    },
    {
      title: "Project 2",
      description:
        "Description of Project 2. Here's a summary of the project's goals and achievements.",
      link: "https://www.google.com",
    },
    {
      title: "Project 3",
      description:
        "Description of Project 3. This project focuses on specific aspects and delivers unique results.",
      link: "https://www.google.com",
    },
  ];

  return (
    <div>
      <main className="container px-4 ml-40 flex flex-col w-1/3 mt-8 justify-start items-start">
        <div className="">
          <div className="flex flex-row justify-between">
            <div className="font-italics mb-20 mt-20">
              <h1 className="text-5xl font-bold">
                Hello, I'm <span className="text-orange-500 ">Bikram</span>
              </h1>
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/profile.JPG"
                alt="Profile"
                width={200}
                height={200}
                className="w-3/4 h-auto rotate-180 rounded-full object-cover"
                quality={85}
              />
            </div>
          </div>

          <RecentProjects projects={projects} />
        </div>
      </main>
      <main className="container mx-auto justify-center items-center mt-40">
        <div className="flex items-center justify-between p-6 w-full rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Resume</h2>
          <a
            href="/path/to/your/resume.pdf"
            download
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Download
          </a>
        </div>
      </main>
    </div>
  );
}
