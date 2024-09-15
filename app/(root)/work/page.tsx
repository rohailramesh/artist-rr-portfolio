import React from "react";
import Experience from "@/components/shared/Experience";
import Project from "@/components/shared/Projects";
import Link from "next/link";
import styles from "@/components/shared/HomePage.module.css";
import { Button } from "@/components/ui/button";
const MyWorkAndProjects = () => {
  return (
    <>
      <section className="wrapper my-8">
        <Experience />
      </section>
      <br />

      <section className="wrapper my-8">
        <Project />
      </section>
      <br />
      <br />
      <div className="flex-center flex ">
        <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
          <Link href="/">Go Back</Link>
        </Button>
      </div>
      <br />
    </>
  );
};

export default MyWorkAndProjects;
