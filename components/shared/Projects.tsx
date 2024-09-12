"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "MMUK London Event",
    image: "/assets/images/mmuk-event.jpeg",
    description:
      "I thoroughly enjoyed the opportunity to choreograph a festive event, where I applied my expertise in dance and deep understanding of Indian culture. The experience of sharing the performance with the audience was truly rewarding and memorable.",
  },
  {
    id: 2,
    title: "MMUK London Event",
    image: "/assets/images/mmuk-event.jpeg",
    description:
      "I thoroughly enjoyed the opportunity to choreograph a festive event, where I applied my expertise in dance and deep understanding of Indian culture. The experience of sharing the performance with the audience was truly rewarding and memorable.",
  },
  {
    id: 3,
    title: "MMUK London Event",
    image: "/assets/images/mmuk-event.jpeg",
    description:
      "I thoroughly enjoyed the opportunity to choreograph a festive event, where I applied my expertise in dance and deep understanding of Indian culture. The experience of sharing the performance with the audience was truly rewarding and memorable.",
  },
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const handleMoreInfoClick = (id: number) => {
    setSelectedProjectId(id);
  };

  return (
    <>
      <div>
        <h1 className="flex justify-center">Projects</h1>
      </div>
      <div className="flex gap-4 mt-4 overflow-x-scroll">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 py-4">
              <img
                src={project.image}
                alt="Placeholder"
                className="w-full h-auto"
                width="200"
                height="200"
                style={{ aspectRatio: "200/200", objectFit: "contain" }}
              />
              <Button onClick={() => handleMoreInfoClick(project.id)}>
                More Info
              </Button>
              {selectedProjectId === project.id && (
                <div className="mt-4 p-4 border-t border-gray-200">
                  <p>{project.description}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
