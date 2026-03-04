"use client";
import SectionBox from "./sectionBox";
import styles from "./headerHome.module.css"
import NavbarHome from "../_navbar/navbarHome";

export default function HeaderHome() {

  return (
    <SectionBox filter={false}>
      <div className={styles["header-home-container"]}>
        <NavbarHome />
        <h1 className={styles["header-home-title"]}>{"FrontEnd"}</h1>
      </div>
    </SectionBox>
  )
}
