import React from "react"
import { Link } from "gatsby"

import * as styles from "./Button.module.css"

type ButtonProps = {
  dark?: boolean
  to: string
  title?: string
}

const Button: React.FC<React.PropsWithChildren & ButtonProps> = ({
  children,
  dark,
  to,
  title,
}) => {
  return (
    <Link to={to} title={title} className={styles.link}>
      <div className={dark ? styles.darkButton : styles.button}>{children}</div>
    </Link>
  )
}

export default Button
