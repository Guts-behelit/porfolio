

import styles from "./contactMe.module.css"
import SectionBox from "./sectionBox"

export default function ContactMe() {
  return (
    <SectionBox>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-text"]}>
          <h2 className={styles["contact-title"]}>Contacto</h2>
          <p className={styles["contact-description"]}>
            ¿Tienes alguna idea, proyecto o propuesta?
            Estoy abierto a colaborar y crear algo increíble.
          </p>
        </div>

        <button className={styles["contact-button"]}>
          Contact Me
        </button>
      </div>
    </SectionBox>
  )
}

