import { useStaticQuery, graphql } from "gatsby"

export const useLatestPost = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(
          filter: { fields: { contentType: { eq: "blog" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 1
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
  )
  return data.allMdx.nodes[0]
}
