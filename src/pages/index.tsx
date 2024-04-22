import React from "react"
import Layout from "@theme/Layout"
import AboutMe from "../components/about-me"
import projects from "../../db"
import AllProjects from "../components/all-projects"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <AboutMe />
      <AllProjects projects={projects} />
    </Layout>
  )
}
