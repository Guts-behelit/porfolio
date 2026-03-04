import styles from './aboutMe.module.css'
import SectionBox from './sectionBox'

export default function AboutMe() {
  return (
    <SectionBox>
      <div className={styles["about-me-container"]}>
        <h2 className={styles["about-me-title"]}>About Me</h2>
        <p className={styles["about-me-description"]}>
          I'm a frontend developer focused on creating modern,
          responsive and user-friendly web experiences.
          I specialize in building clean interfaces with strong
          performance and smooth interactions.
        </p>
        <a href="#projects" className={styles["about-me-link"]}>
          Read More →
        </a>
      </div>

      <div className={styles["about-me-image"]}></div>
    </SectionBox>
  )
}
