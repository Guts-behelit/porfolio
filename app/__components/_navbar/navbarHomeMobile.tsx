import Logo from './logo';
import styles from './navbarHomeMobile.module.css';
export default function NavbarHomeMobile({links}: {links: string[]}) { // ← una sola fuente de verdad

  return (
    <nav className={styles["navbar-home-mobile-container"]}>
      <Logo />
        <ul className={styles["mobile-menu"]}>
          {links.map(link => <li key={link}>{link}</li>)}
        </ul>
    </nav>
  );

}
