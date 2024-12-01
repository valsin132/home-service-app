import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <p className={styles.header}>Oops!</p>
      <h1>Page not found!</h1>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
