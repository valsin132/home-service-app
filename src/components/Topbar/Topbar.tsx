import { Button } from "../Button/Button";
import styles from "./Topbar.module.scss";

export function Topbar() {
  const links = [
      {
        href: "#",
        label: "Home",
      },
      {
        href: "#",
        label: "Services",
      },
      {
        href: "#",
        label: "About Us",
      },
    ];
      
  return (
    <div className={styles.topbar}>
      <div className={styles.navWrapper}>
        <img src="./logo.svg" alt="logo" />
        <nav className={styles.navigation}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
        <Button title="Login / Sign Up" />
    </div>
  );
};
