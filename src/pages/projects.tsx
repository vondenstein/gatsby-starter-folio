import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import SEO from "../components/SEO"

import { useProjects } from "../hooks/use-projects"

const CodePage: React.FC<PageProps> = () => {
  const projects = useProjects()

  return (
    <Layout>
      <Section
        title="Projects"
        subtitle="Here are a collection of projects I've worked on that I wanted to share."
        first
      >
        {projects.edges.map(({ node }: Queries.ProjectsJsonEdge) => (
          <ProjectCard
            title={node.title!}
            description={node.description!}
            color={node.color!}
            links={node.links!}
          />
        ))}
      </Section>
    </Layout>
  )
}

export default CodePage

export const Head: HeadFC = () => (
  <SEO
    title="Software Projects"
    description="A collection of software projects Stephen has worked on ~ for fun or to learn ~
that he wanted to share."
  />
)
