import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Button from "../components/Button"
import SEO from "../components/SEO"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin:
            "max(calc(calc(100vh - 32rem) / 2), 4rem) 0 max(calc(calc(100vh - 32rem) / 2), 6rem)",
        }}
      >
        <StaticImage
          src={"../images/404.svg"}
          alt={"A cartoon astronaut floating away from his ship."}
          loading={"eager"}
          width={500}
          style={{ marginTop: "-50px", marginBottom: "2rem" }}
          placeholder="none"
        />
        <h1 style={{ marginBottom: "0.75rem" }}>Uh-oh!</h1>
        <p style={{ marginBottom: "2rem" }}>
          Looks like you got lost in space.
        </p>
        <Button to="/" title="Home" dark>
          Phone home
        </Button>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO
    title="404 - Not Found"
    description="Sorry, there is nothing at this URL."
  />
)
