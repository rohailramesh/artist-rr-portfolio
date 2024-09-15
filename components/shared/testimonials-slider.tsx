"use client";
import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";
import Autoplay from "embla-carousel-autoplay";
import styles from "@/components/shared/HomePage.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <>
      <h1
        className={`text-center text-2xl font-bold mb-8 text-orange-500 ${styles.textColour}`}
      >
        What others have to say
        <br />↔
      </h1>
      <section className={`w-full py-4 ${styles.testimonialSection}`}>
        <div className="w-full mx-auto px-3 lg:max-w-6xl">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                >
                  <div
                    className={`flex flex-col px-4 py-5 sm:p-6 ${styles.testimonialCarousel}`}
                    style={{
                      height: "350px", // Set a consistent height
                      width: "100%", // Keep it full width
                    }}
                  >
                    <q className="flex-1 text-white dark:text-gray-300">
                      {testimonial.quote}
                    </q>
                    <div className="mt-6 flex gap-3">
                      <span className="inline-flex rounded-full">
                        {/* <Image
                          loader={imageLoader}
                          className="h-10 w-10 rounded-full"
                          height={40}
                          width={40}
                          alt={testimonial.name}
                          src="https://www.gravatar.com/avatar?d=mp"
                          loading="lazy"
                        /> */}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-white dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}
