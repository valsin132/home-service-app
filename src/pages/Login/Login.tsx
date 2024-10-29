import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/constants"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.scss";

export function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    login({ email, password });
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input className={styles.input} type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required/>
        <input className={styles.input} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
        <button className={styles.submitButton} type="submit">Login</button>
      </form>
      <div className={styles.link}>
          <Link to={ROUTES.REGISTER} >
            Don't have an account? Sign up
          </Link>
        </div>
    </div>
  );
};
