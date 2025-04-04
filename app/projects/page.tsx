import Link from "next/link";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="min-h-screen p-6 my-10">
      <h1 className="text-4xl my-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="p-6 bg-base-100 rounded-lg shadow-lg cursor-pointer hover:bg-base-200 transition">
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={100}
                className="rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-4 text-primary">
                {project.title}
              </h2>
              <p className="mt-2 text-base-content">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
    image: "/graduation.png",
    additional: "",
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A React Native app for managing daily tasks efficiently.",
    tech: ["React Native", "Expo", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=taskmanager",
    github: "https://github.com/yourusername/task-manager",
    image: "/tasks.png",
    additional:
      "This project was designed with the goal of providing a seamless experience in creating and managing tasks. It is built using modern technologies such as React, React Native, and Firebase for real-time updates.",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A digital workout assistant",
    tech: ["React Native", "Expo", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=taskmanager",
    github: "https://github.com/yourusername/task-manager",
    image: "/fitness.png",
    additional:
      "A Fitness Tracker app that helps users monitor their health and fitness progress by tracking physical activities, calories burned, sleep patterns, and other health metrics. It's commonly used for exercise tracking, diet planning, and overall wellness.",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Track your income, expenses, and generate financial reports.",
    tech: ["React Native", "Expo", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=taskmanager",
    github: "https://github.com/yourusername/task-manager",
    image: "/expenses.png",
    additional:
      "Expense Tracker helps users monitor their spending habits, categorize expenses, set budgets, and achieve savings goals. This app is especially useful for individuals who want to stay on top of their finances, track bills, and manage their savings.",
  },
  {
    id: 5,
    title: "AI Chatbot",
    description: "A React Native ChatGPT replica.",
    tech: ["React Native", "Expo", "Firebase, OpenAI"],
    link: "https://play.google.com/store/apps/details?id=taskmanager",
    github: "https://github.com/yourusername/task-manager",
    image: "/chatbot.png",
    additional:
      "An AI Chatbot designed to automate conversations and provide quick, accurate, and personalized responses to users. This app can be applied in customer service, as an assistant, or even in e-commerce settings for guiding users.",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  additional: string;
}
