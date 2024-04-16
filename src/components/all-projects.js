import React from "react"
import ProjectGrid from "./project-grid"

export default function AllProjects({ projects }) {
  return (
    <section className="md:mx-80 pb-20">
      <h1 className="font-bold py-4 text-gray-800 text-center md:text-4xl md:py-8">
        Project List
      </h1>
      <ProjectGrid projects={projects} />
    </section>
  )
}
