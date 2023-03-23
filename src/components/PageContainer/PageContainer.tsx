import React, { useContext, useEffect } from "react"
import MenuContext from "../MenuContext"

import * as styles from "./PageContainer.module.css"

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen } = useContext(MenuContext)

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.cssText = ""
    }
  }, [isOpen])

  return <div className={isOpen ? styles.open : styles.closed}>{children}</div>
}

export default PageContainer
