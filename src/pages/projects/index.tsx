import React from "react"

import Layout from "@theme/Layout"
import projects from "../../../db"
import AllProjects from "@site/src/components/all-projects"

export default function Projects(): JSX.Element {
  return (
    <Layout>
      <AllProjects projects={projects} />
    </Layout>
  )
}
