import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";
import { Button } from "../Button/Button";
import Logo from "../../assets/logo.svg"
import styles from "./Topbar.module.scss";

export function Topbar() {
  const navigate = useNavigate();

  const links = [
      {
        href: ROUTES.HOME,
        label: "Home",
      },
      {
        href: ROUTES.SERVICES,
        label: "Services",
      },
      {
        href: ROUTES.ABOUT_US,
        label: "About Us",
      },
    ];
      
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <Link to={ROUTES.HOME}>
            <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button title="Login / Sign Up" onClick={() => navigate(ROUTES.LOGIN)} />
    </header>
  );
};
