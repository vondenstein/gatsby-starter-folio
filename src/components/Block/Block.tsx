import React from "react"

import * as styles from "./Block.module.css"

const Block: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.block}>{children}</div>
}

export default Block
