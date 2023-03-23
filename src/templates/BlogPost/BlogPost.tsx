import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/Layout"
import ContentHeading from "../../components/ContentHeading"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import SEO from "../../components/SEO"

import * as styles from "./BlogPost.module.css"

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  const { frontmatter, fields } = data.mdx!
  const heroImage = getImage(frontmatter?.hero_image?.childImageSharp!)

  return (
    <Layout>
      <ContentHeading
        title={frontmatter?.title!}
        showAuthor
        date={frontmatter?.date!}
        readingTime={fields?.timeToRead?.minutes!}
      />
      <GatsbyImage
        loading="eager"
        image={heroImage!}
        alt={frontmatter?.hero_image_alt!}
        className={styles.heroImage}
      />
      <div className={styles.content}>{children}</div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              outputPixelDensities: [0.4, 0.65, 0.8, 1.0, 1.3, 2.0]
            )
          }
        }
      }
      fields {
        timeToRead {
          minutes
        }
      }
      excerpt
    }
  }
`

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => {
  const { frontmatter, excerpt } = data.mdx!
  const { siteUrl } = useSiteMetadata()

  return (
    <SEO
      title={frontmatter?.title!}
      description={excerpt!}
      imgType="post"
      image={`${siteUrl}${frontmatter?.hero_image?.childImageSharp?.gatsbyImageData.images.fallback?.src}`}
    />
  )
}
