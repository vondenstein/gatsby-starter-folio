import React from "react"
import { isBright } from "../../utils/is-bright"

import * as styles from "./ProjectCard.module.css"

type ProjectCardProps = {
  title: string
  description: string
  color: string
  links?: readonly Queries.Maybe<Queries.ProjectsJsonLinks>[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  color,
  links,
}) => {
  const primaryLink = links?.[0]
  const background = color ?? "#f2f2f2"
  const foreground = isBright(background) ? "#111111" : "#ffffff"

  return (
    <div className={styles.card} style={{ background: background }}>
      <div className={styles.left}>
        <div style={{ color: foreground }} className={styles.heading}>
          {title}
        </div>
        <div style={{ color: foreground }} className={styles.description}>
          {description}
        </div>
        <hr style={{ background: foreground }} className={styles.hr} />
        <div className={styles.links}>
          {links?.map(link => (
            <a
              style={{ color: foreground }}
              className={styles.link}
              href={link?.url ?? "/"}
              title={link?.text!}
            >
              {link?.text}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.right}></div>
      <a
        style={{ color: foreground }}
        className={`${styles.link} ${styles.mobileLink}`}
        href={primaryLink?.url ?? "/"}
        title={primaryLink?.text!}
      >
        {primaryLink?.text}
      </a>
    </div>
  )
}

export default ProjectCard
