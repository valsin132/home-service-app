import { Link } from "react-router-dom";
import { ROUTES } from "../../router/constants"
import styles from "../Login/Login.module.scss";

export function Register() {
  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.formContainer}>
        <input className={styles.input} placeholder="Name" required/>
        <input className={styles.input} type="email" placeholder="Email" required/>
        <input className={styles.input} type="password" placeholder="Password" required/>
        <button className={styles.submitButton} type="submit">Login</button>
      </form>
      <div className={styles.link}>
          <Link to={ROUTES.LOGIN} >
          Already have an account? Log in
          </Link>
        </div>
    </div>
  );
};
