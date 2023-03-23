import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Section from "../../components/Section"
import ContentLink from "../../components/ContentLink"
import SEO from "../../components/SEO"

const BlogPage: React.FC<PageProps<Queries.BlogPostsQuery>> = ({ data }) => {
  return (
    <Layout>
      <Section title="Blog" first>
        {data.allMdx.nodes.map(node => (
          <ContentLink
            id={node.id}
            title={node.frontmatter?.title!}
            description={node.excerpt}
            date={node.frontmatter?.date!}
            readingTime={node.fields?.timeToRead?.minutes}
            image={node.frontmatter?.hero_image?.childImageSharp!}
            imageAlt={node.frontmatter?.hero_image_alt!}
            link={`/${node.fields?.contentType}/${node.frontmatter?.slug}`}
            linkTitle={node.frontmatter?.title!}
          />
        ))}
      </Section>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPosts {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { contentType: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 570
                outputPixelDensities: [0.65, 1.0, 1.3, 2.0]
              )
            }
          }
        }
        fields {
          timeToRead {
            minutes
          }
          contentType
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => (
  <SEO
    title="Blog"
    description="A collection of posts about software engineering, electronics and photography with the occasional post about life and travels."
  />
)
