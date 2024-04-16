import React from "react"

import Layout from "@theme/Layout"

import AboutMe from "../components/about-me"
import FeaturedProjects from "../components/featured-projects"
import projects from "../../db"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <AboutMe />
      <FeaturedProjects projects={projects} />
    </Layout>
  )
}
