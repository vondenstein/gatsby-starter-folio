import React, { MouseEventHandler, useContext } from "react"

import * as styles from "./MenuButton.module.css"
import MenuContext from "../MenuContext"

type MenuButtonProps = {
  onClick?: MouseEventHandler
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`${styles.menuButton} ${isOpen ? styles.open : styles.closed}`}
      onClick={onClick}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  )
}

export default MenuButton
