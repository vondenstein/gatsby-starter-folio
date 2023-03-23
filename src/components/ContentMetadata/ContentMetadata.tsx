import React from "react"
import { Link } from "gatsby"

import * as styles from "./ContentMetadata.module.css"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

type ContentMetadataProps = {
  showAuthor?: boolean
  dark?: boolean
  date: string
  readingTime?: number | null
}

const ContentMetadata: React.FC<ContentMetadataProps> = ({
  showAuthor,
  dark,
  date,
  readingTime,
}) => {
  const { author } = useSiteMetadata()

  return (
    <p className={dark ? styles.darkText : styles.text}>
      {showAuthor && (
        <>
          By{" "}
          <Link
            to="/about"
            className={styles.link}
            title={`About ${author.name}`}
          >
            {author.name}
          </Link>
          ,{" "}
        </>
      )}
      {date}
      {readingTime && ` · ${Math.round(readingTime!)} minute read`}
    </p>
  )
}

export default ContentMetadata
