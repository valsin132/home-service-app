import { ReactNode } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    children: ReactNode;
}

const Avatar = ({ children }: AvatarProps) => {
  return <div className={styles.avatar}>{children}</div>;
};
export default Avatar;