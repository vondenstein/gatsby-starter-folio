import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Section from "../components/Section"
import ContentLink from "../components/ContentLink"
import ContentGrid from "../components/ContentGrid"
import Block from "../components/Block"
import Button from "../components/Button"
import SEO from "../components/SEO"

import { useLatestPost } from "../hooks/use-latest-post"

const IndexPage: React.FC<PageProps> = () => {
  const latestPost = useLatestPost()

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "10vh auto 40vh",
        }}
      >
        <h1>Hi, I'm a Gatsby starter!</h1>
        <p>
          I can help you set up a personal website with a blog, project
          showcase, and bio in minutes.
        </p>
        <p>
          If you want to take a look at my code, see me{" "}
          <a
            href="https://github.com/vondenstein/gatsby-starter-folio"
            title="gatsby-starter-folio on GitHub"
          >
            on GitHub
          </a>
        </p>
      </div>
      <Section title="Latest Post">
        <ContentLink
          id={latestPost.id}
          title={latestPost.frontmatter.title}
          description={latestPost.excerpt}
          date={latestPost.frontmatter.date}
          readingTime={latestPost.fields.timeToRead.minutes}
          image={latestPost.frontmatter.hero_image}
          imageAlt={latestPost.frontmatter.hero_image_alt}
          link={`/${latestPost.fields.contentType}/${latestPost.frontmatter.slug}`}
          linkTitle={latestPost.frontmatter.title}
        />
      </Section>
      {/* <Section title="Recent Photos">
        <ContentGrid>
          {recentPhotos.allMdx.nodes.map(node => (
            <ContentLink
              direction="vertical"
              id={node.id}
              title={node.frontmatter?.title!}
              date={node.frontmatter?.date!}
              image={node.frontmatter?.hero_image?.childImageSharp!}
              imageAlt={node.frontmatter?.hero_image_alt!}
              link={`/${node.fields?.contentType}/${node.frontmatter?.slug}`}
              linkTitle={node.frontmatter?.title!}
            />
          ))}
        </ContentGrid>
      </Section> */}
      <Block>
        <h2>Projects</h2>
        <p style={{ maxWidth: "500px", margin: "0 auto 25px" }}>
          I can help you showcase your projects that you'd like to share. Take a
          look at the projects page!
        </p>
        <Button to="/code" title="Link to Projects Page">
          View projects
        </Button>
      </Block>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
