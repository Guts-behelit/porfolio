import styles from "./sectionBox.module.css";

export default function SectionBox({children ,filter}: {children: React.ReactNode, filter?: boolean}) {
  return (
    <div className={styles["section-box-container"]}>
      {filter && <div className={styles["section-box-filter"]} />}
      {children}</div>
  )
}
