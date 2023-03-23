import React from "react"
import { Link } from "gatsby"

import * as styles from "./NavLink.module.css"

type NavLinkProps = {
  to: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const NavLink: React.FC<NavLinkProps> = ({ to, title, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      title={title}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      {title}
    </Link>
  )
}

export default NavLink
