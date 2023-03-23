import React, { useContext } from "react"
import { Link, navigate } from "gatsby"

import * as styles from "./NavBar.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import MenuContext from "../MenuContext"
import MenuButton from "../MenuButton"
import NavLink from "../NavLink"

const NavBar: React.FC = () => {
  const navLinks = useNavigationLinks()
  const { isOpen, setOpen } = useContext(MenuContext)

  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }

  /* This is pretty bad. TODO: remove duplicate code
  maybe pass these functions down from layout? */
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault()
    setOpen(isOpen => !isOpen)

    setTimeout(() => {
      navigate(path)
    }, 700)
  }

  return (
    <nav className={styles.container}>
      <Link
        className={styles.logoLink}
        to="/"
        title="Home"
        onClick={isOpen ? e => handleNav(e, "/") : undefined}
      >
        <img src="/logo.svg" alt="logo" className={styles.logo}/>
      </Link>
      <div className={styles.right}>
        <MenuButton onClick={toggleNav} />
        <div className={styles.links}>
          {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
            return <NavLink to={node.url ?? ""} title={node.title!} />
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
