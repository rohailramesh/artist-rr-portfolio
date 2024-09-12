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
import TestimonialSliderCard from "@/components/shared/testimonials-slider-card";
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
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">My upcoming workshops!</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search /> */}
          {/* <CategoryFilter /> */}
        </div>

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
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Professional Dancer</h1>
            <p className="p-regular-20 md:p-regular-24">
              Find out more about my journey and book tickets to upcoming
              workshops!
            </p>
          </div>

          <Image
            src="/assets/images/intro-pic.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section>
        <Experience testimonials={testimonials} />
      </section>
      <section className="flex flex-col md:flex-row gap-8 py-10">
        <div className="flex-1">
          <TestimonialSlider testimonials={testimonials} />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
