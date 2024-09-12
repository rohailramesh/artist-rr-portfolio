import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <>
      <h1>My Experience</h1>
      <div className={styles.experienceContainer}>
        <Carousel className={styles.carouselContainer}>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className={`${styles.carouselItem} p-1`}>
                  <Card className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/assets/images/intro-pic.jpeg" // replace with your image path
                          alt="Experience Image"
                          layout="fill"
                          objectFit="cover"
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.textContainer}>
                        <h2>My Experience</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur, reprehenderit? Repudiandae magnam
                          dolor provident porro adipisci, velit veritatis quos
                          atque tenetur molestias doloribus vel! Deleniti
                          asperiores iste repellendus distinctio sapiente?
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
