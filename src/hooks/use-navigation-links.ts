import { useStaticQuery, graphql } from "gatsby"

export const useNavigationLinks = () => {
  const data = useStaticQuery(
    graphql`
      {
        allNavigationJson {
          edges {
            node {
              id
              url
              title
            }
          }
        }
      }
    `
  )
  return data.allNavigationJson
}
