import React from "react"
import { Link } from "gatsby"

import * as styles from "./Footer.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

import NavLink from "../NavLink"

const Footer: React.FC = () => {
  const navLinks = useNavigationLinks()
  const { author } = useSiteMetadata()

  return (
    <footer className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.logoLink} to={"/"} title="Home">
          <img src="/logo.svg" alt="logo" className={styles.logo}/>
        </Link>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} {author.name}.
        </div>
      </div>
      <div className={styles.right}>
        <NavLink to="/" title="Home" />
        {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
          return <NavLink to={node.url ?? ""} title={node.title!} />
        })}
      </div>
    </footer>
  )
}

export default Footer
