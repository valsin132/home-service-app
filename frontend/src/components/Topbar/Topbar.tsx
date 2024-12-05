import { UserContext } from "../../contexts/UserContext";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ROUTES } from "../../constants";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";
import Logo from "../../assets/logo.svg";
import { useContext, useState } from "react";
import classNames from "classnames";
import styles from "./Topbar.module.scss";

export function Topbar() {
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setIsActive(!isActive);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setIsActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <NavLink to={ROUTES.HOME} onClick={handleMenuItemClick}>
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav className={classNames(styles.navigation, menuOpen && styles.burgerOpen)}>
          <ul className={styles.links}>
            <li>
              <NavLink to={ROUTES.HOME} onClick={handleMenuItemClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.SERVICES} onClick={handleMenuItemClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ABOUT_US} onClick={handleMenuItemClick}>
                About Us
              </NavLink>
            </li>
          </ul>
          {user ? (
            <Avatar>{user.name[0]}</Avatar>
          ) : (
            <Button onClick={() => navigate(ROUTES.LOGIN)}>Log in / Sign up</Button>
          )}
        </nav>
      </div>
      <button
        className={styles.burgerButton}
        onClick={handleMenuToggle}
        type="button"
        aria-label="open menu"
      >
        {isActive ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
