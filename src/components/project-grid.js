import React from "react"
import ProjectItem from "./project-item"

export default function ProjectGrid({ projects }) {
  return (
    <ul className="list-none grid content-center mx-auto my-0 md:max-w-[1000px] md:gap-5">
      {projects.map((project) => (
        <li key={project.id}>
          <div className="bg-gray-200 w-full h-1 md:hidden" />
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  )
}
