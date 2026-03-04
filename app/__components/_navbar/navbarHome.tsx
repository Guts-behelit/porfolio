"use client";

import { useState } from "react";
import Logo from "./logo";
import NavbarHomeMobile from "./navbarHomeMobile";
import styles from "./navbarHome.module.css";

export default function NavbarHome() {
  const [menuOpen, setMenuOpen] = useState(false);
   const links = ['Home','Projects', 'About', 'Contact']; // ← una sola fuente de verdad
 
   return (
     <nav className={styles["navbar-home-container"]}>
       <Logo />
       {/* Desktop: visible con CSS */}
       <ul className={styles["desktop-menu"]}>
         {links.map(link => <li key={link}>{link}</li>)}
       </ul>
       {/* Mobile: hamburger */}
       <button className={styles["hamburguer-btn"]} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
       {menuOpen && (
         <NavbarHomeMobile links={links} />
       )}
     </nav>
   );
}
