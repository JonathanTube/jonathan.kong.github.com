import React from "react"
import ProjectGrid from "./project-grid"

export default function FeaturedProjects({ projects }) {
  return (
    <section>
      <h2 className="text-center text-lg py-4 font-bold text-gray-800 md:text-4xl md:py-8">
        Latest Projects
      </h2>
      <ProjectGrid projects={projects} />
      <div className="text-center my-10 font-semibold text-lg text-gray-600">
        <a href="/projects">- Show More -</a>
      </div>
    </section>
  )
}
