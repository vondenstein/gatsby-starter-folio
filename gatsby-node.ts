import { CreateNodeArgs, CreatePageArgs, CreatePagesArgs } from "gatsby"
const readingTime = require(`reading-time`)
const path = require(`path`)

const postTemplate = path.resolve(`./src/templates/BlogPost/BlogPost.tsx`)

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // Add reading time estimates to blog posts (Mdx pages)
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })

    // Add content type to Mdx pages so we know which template/path to use
    const parent = getNode(node.parent!)
    createNodeField({
      node,
      name: `contentType`,
      value: parent?.sourceInstanceName,
    })
  }
}

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  /***
   * Create pages for mdx nodes based on contentType
   ***/
  const mdxPageQuery: { data?: Queries.MDXPagesQuery; errors?: any } =
    await graphql(`
      query MDXPages {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
            fields {
              contentType
            }
          }
        }
      }
    `)

  if (mdxPageQuery.errors) {
    reporter.panicOnBuild("Error loading MDX content", mdxPageQuery.errors)
  }

  const templates: { [id: string]: string } = {
    blog: postTemplate,
  }

  const mdxPages = mdxPageQuery.data?.allMdx.nodes
  mdxPages!.forEach(node => {
    createPage({
      path: `/${node.fields?.contentType}/${node.frontmatter?.slug}`,
      component: `${templates[node.fields!.contentType!]}?__contentFilePath=${
        node.internal.contentFilePath
      }`,
      context: { id: node.id },
    })
  })
}
