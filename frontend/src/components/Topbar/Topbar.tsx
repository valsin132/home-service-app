import { UserContext } from '../../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ROUTES } from '../../constants';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';
import Logo from '../../assets/logo.svg';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import styles from './Topbar.module.scss';

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
        <Link to={ROUTES.HOME} onClick={handleMenuItemClick}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={classNames(styles.navigation, menuOpen && styles.burgerOpen)}>
          <ul className={styles.links}>
            <li>
              <Link to={ROUTES.HOME} onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES} onClick={handleMenuItemClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT_US} onClick={handleMenuItemClick}>
                About Us
              </Link>
            </li>
          </ul>
          {user ? (
            <Avatar>{user.email[0]}</Avatar>
          ) : (
            <Button title="Login / Sign Up" onClick={() => navigate(ROUTES.LOGIN)} />
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
