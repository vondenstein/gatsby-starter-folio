import React from "react"

import * as styles from "./ContentGrid.module.css"

const ContentGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.contentGrid}>{children}</div>
}

export default ContentGrid
