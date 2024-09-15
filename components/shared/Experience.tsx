"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "@/data/projects.json"; // Import the projects data
import styles from "@/components/shared/HomePage.module.css";
export default function Experience() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <>
      <h1
        className={`text-center text-2xl font-bold mb-8 text-orange-500 ${styles.workHeadings}`}
      >
        EXPERIENCE
      </h1>
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-96 h-96 relative transition-all duration-500 transform-style-preserve-3d ${
              flippedIndex === project.id ? "rotate-y-180" : ""
            }`}
            onClick={() =>
              setFlippedIndex(flippedIndex === project.id ? null : project.id)
            }
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 backface-hidden transition-opacity duration-500 ${
                flippedIndex === project.id ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-full h-full bg-primary rounded-xl flex flex-col items-center justify-center p-4">
                <p className="mt-4 text-lg font-semibold text-black">
                  {project.name}
                </p>
                {/* Image */}
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  width={project.width}
                  height={project.height}
                  className="rounded-lg object-cover"
                />
                {/* project Name */}

                {/* Description */}
                <p className="mt-4 text-lg font-semibold text-black">
                  Click to flip and learn more!
                </p>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 backface-hidden rotate-y-180 transition-opacity duration-500 ${
                flippedIndex === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full h-full bg-card rounded-xl p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-500 underline"
                >
                  Learn more!
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
