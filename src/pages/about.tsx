import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/BioPage.module.css"
import Layout from "../components/Layout"
import Block from "../components/Block"
import SEO from "../components/SEO"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const BioPage: React.FC<PageProps> = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <Block>
        <StaticImage
          className={styles.image}
          src="../images/profile.jpg"
          alt="Me in a field looking off into the distance."
          layout="fixed"
          loading="eager"
          height={180}
          width={180}
        />
        <h2 style={{ marginBottom: "15px" }}>{author.title}</h2>
        <p style={{ marginBottom: "5px" }}>{author.subtitle}</p>
      </Block>
      <div>
        <h2>Overview</h2>
        <p>
          A quick overview of this starter. If you want to learn more,
          definitely check out the{" "}
          <a
            href="https://github.com/vondenstein/gatsby-starter-folio/blobs/main/README.md"
            title="gatsby-starter-folio README"
          >
            README
          </a>{" "}
          over on GitHub.
        </p>
        <h2>How to use</h2>
        <p>How to use gatsby-starter-folio.</p>
        <h2>More information</h2>
        <p>Where to find more information about gatsby-starter-folio.</p>
      </div>
    </Layout>
  )
}

export default BioPage

export const Head: HeadFC = () => {
  const { author } = useSiteMetadata()

  return (
    <SEO
      title="Bio"
      description="Hi, I'm Stephen. Software engineer, tinkerer, and occasional photographer."
      imgType="profile"
      imgTitle={author.title}
      imgSubtitle={author.subtitle}
      image="https://vondenstein.com/static/d6739856934033244f0b7ed44b54d539/90089/profile.jpg"
    />
  )
}
