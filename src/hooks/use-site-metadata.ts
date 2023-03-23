import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            ogImageUrl
            description
            author {
              name
              title
              subtitle
            }
            twitterHandle
          }
        }
      }
    `
  )
  return site.siteMetadata
}
