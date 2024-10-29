import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";
import { Button } from "../Button/Button";
import Logo from "../../assets/logo.svg"
import styles from "./Topbar.module.scss";

export function Topbar() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <Link to={ROUTES.HOME}>
            <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.link}>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES}>Services</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT_US}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Button title="Login / Sign Up" onClick={() => navigate(ROUTES.LOGIN)} />
    </header>
  );
};
