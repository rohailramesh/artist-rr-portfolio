"use client";

import { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types";

interface TestimonialSliderFlippableProps {
  testimonials: Testimonial[];
}

export default function Experience({
  testimonials,
}: TestimonialSliderFlippableProps) {
  return (
    <section className="w-full py-4">
      <div className="mx-auto lg:max-w-6xl px-3">
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <FlippableCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}

function FlippableCard({ testimonial }: { testimonial: Testimonial }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`w-96 h-96 relative transition-all duration-500 transform-style-preserve-3d ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front of the card - showing the quote */}
      <div
        className={`absolute inset-0 backface-hidden transition-opacity duration-500 ${
          flipped ? "opacity-0" : "opacity-100"
        }`}
      >
        <Card className="shadow-sm flex items-center justify-center p-6">
          <CardContent className="flex flex-col items-center text-center">
            <Image
              loader={imageLoader}
              className="h-16 w-16 rounded-full"
              height={64}
              width={64}
              alt={testimonial.name}
              src={testimonial.imgSrc}
              loading="lazy"
            />
            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Back of the card - showing more details */}
      <div
        className={`absolute inset-0 backface-hidden rotate-y-180 transition-opacity duration-500 ${
          flipped ? "opacity-100" : "opacity-0"
        }`}
      >
        <Card className="shadow-sm flex items-center justify-center p-6">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <q className="text-lg text-gray-600 dark:text-gray-300">
              {testimonial.quote}
            </q>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
