import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { ROUTES } from "@/constants";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/contexts/UserContext";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  children: ReactNode;
}

export function Avatar({ children }: AvatarProps) {
  const { logout } = useContext(UserContext);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const handleToggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.avatar} onClick={handleToggleDropDown} ref={dropdownRef}>
      {children}
      {isDropDownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={() => navigate(ROUTES.MY_ACCOUNT)}>
            My Account
          </div>
          <div className={styles.dropdownItem} onClick={() => navigate(ROUTES.MY_BOOKING)}>
            My Booking
          </div>
          <div className={styles.dropdownItem} onClick={() => handleLogout()}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
