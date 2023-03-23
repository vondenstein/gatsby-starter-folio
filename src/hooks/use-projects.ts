import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allProjectsJson {
          edges {
            node {
              id
              title
              description
              color
              links {
                text
                url
              }
            }
          }
        }
      }
    `
  )
  return data.allProjectsJson
}
