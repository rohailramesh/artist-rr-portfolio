import React from "react";
import Experience from "@/components/shared/Experience";
import Project from "@/components/shared/Projects";

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
    </>
  );
};

export default MyWorkAndProjects;
