// import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from "@/components/shared/Collection";
// import Search from '@/components/shared/Search';
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import VideoDisplay from "@/components/shared/VideoDisplay";
import Experience from "@/components/shared/Experience";
import Projects from "@/components/shared/Projects";
import TestimonialSlider from "@/components/shared/testimonials-slider";
import testimonials from "@/data/testimonials.json";
import MyWorkAndProjects from "./work/page";
import TestimonialSliderCard from "@/components/shared/testimonials-slider-card";
import styles from "@/components/shared/HomePage.module.css";
import { ContactForm } from "@/components/shared/ContactForm";
export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="h-[80vh] w-full">
        {/* Video section */}
        <VideoDisplay />
      </section>
      <section
        id="events"
        className={`wrapper my-8 flex flex-col gap-8 md:gap-12 ${styles.eventsSection}`}
      >
        <h2 className="h2-bold">My upcoming workshops!</h2>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
      <section
        className={`bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ${styles.mySelf}`}
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Who is ReeBolly?</h1>
            <p className="p-regular-20 md:p-regular-24">
              Reeha is a trained dancer for 5+ years but has a passion of
              dancing since childhood. Spreading the love of dance and life
              through dance styles such as Afro, Hip-Hop, Contemppary,
              Semi-Classical and Bachata through Bollywood workshops and
              tutorials. Already on your toes after reading this? Join me in one
              of my workshops!
            </p>
          </div>

          <Image
            src="/assets/images/intro-pic.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />

          <Link href="/work">
            <Button
              className={`w-full flex flex-col justify-center ${styles.btn}`}
            >
              My Journey
            </Button>
          </Link>
        </div>
      </section>
      {/* <section>
        <Experience testimonials={testimonials} />
      </section> */}
      <div className="flex-1">
        <TestimonialSlider testimonials={testimonials} />
      </div>
      <div className={`flex-1 ${styles.contactForm}`}>
        <ContactForm />
      </div>
    </>
  );
}
