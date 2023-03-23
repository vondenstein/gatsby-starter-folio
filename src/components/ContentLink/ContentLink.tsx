import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import * as styles from "./ContentLink.module.css"
import ContentMetadata from "../ContentMetadata"

type ContentLinkProps = {
  id: string
  title: string
  description?: string | null
  date: string
  readingTime?: number | null
  image: ImageDataLike
  imageAlt?: string
  link: string
  linkTitle?: string
  direction?: "horizontal" | "vertical"
}

const ContentLink: React.FC<ContentLinkProps> = ({
  id,
  title,
  description,
  date,
  readingTime,
  image,
  imageAlt,
  link,
  linkTitle,
  direction = "horizontal",
}) => {
  const imageData = getImage(image)

  return (
    <Link to={link} className={styles.link} title={linkTitle}>
      <div
        className={
          direction === "horizontal"
            ? styles.horizontalContainer
            : styles.verticalContainer
        }
      >
        <div>
          <GatsbyImage
            image={imageData!}
            alt={imageAlt!}
            className={styles.image}
          />
        </div>
        <div
          className={
            direction === "horizontal"
              ? styles.horizontalText
              : styles.verticalText
          }
        >
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.excerpt}>{description}</p>}
          <ContentMetadata date={date} readingTime={readingTime} dark />
        </div>
      </div>
    </Link>
  )
}

export default ContentLink
