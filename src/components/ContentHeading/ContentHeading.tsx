import React from "react"

import ContentMetadata from "../ContentMetadata"
import * as styles from "./ContentHeading.module.css"

type ContentHeadingProps = {
  title: string
  showAuthor?: boolean
  date: string
  readingTime?: number
  dark?: boolean
}

const ContentHeading: React.FC<ContentHeadingProps> = ({
  title,
  showAuthor,
  dark,
  date,
  readingTime,
}) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>
      <ContentMetadata
        showAuthor={showAuthor}
        date={date}
        readingTime={readingTime}
        dark={dark}
      />
    </div>
  )
}

export default ContentHeading
