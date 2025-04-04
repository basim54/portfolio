import React from "react";
import Image from "next/image";
import { projects } from "../page";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-6 my-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Project Hero Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={350}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg">{project.description}</p>
            <div className="mt-4">
              <span className="text-sm font-semibold text-primary">
                Tech Stack:{" "}
              </span>
              <span className="text-sm text-gray-500">
                {project.tech.join(", ")}
              </span>
            </div>
            <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary ml-8"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-md text-gray-700 dark:text-gray-300 text-justify">
            {project.additional}
          </p>
        </div>
      </div>
    </div>
  );
}
