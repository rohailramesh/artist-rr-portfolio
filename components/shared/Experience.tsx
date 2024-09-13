"use client";

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

export default function Experience() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`w-96 h-96 relative transition-all duration-500 transform-style-preserve-3d ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front Side */}
      <div
        className={`absolute inset-0 backface-hidden transition-opacity duration-500 ${
          flipped ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-full bg-primary rounded-xl flex flex-col items-center justify-center p-4">
          <p className="mt-4 text-lg font-semibold text-primary-foreground">
            Event name
          </p>
          {/* Image */}
          <Image
            src="/assets/images/intro-pic.jpeg" // Replace with your image path
            alt="Event Image"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
          {/* Description */}
          <p className="mt-4 text-lg font-semibold text-primary-foreground">
            Click to flip and learn more!
          </p>
        </div>
      </div>

      {/* Back Side */}
      <div
        className={`absolute inset-0 backface-hidden rotate-y-180 transition-opacity duration-500 ${
          flipped ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-full bg-card rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-card-foreground">Event</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Event description
          </p>
        </div>
      </div>
    </div>
  );
}
