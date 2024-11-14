import { Link, useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants";
import { ROUTES } from "../../constants";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.scss";

export function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("Password is required.");
    } else if (!PASSWORD_REGEX.test(password)) {
      setPasswordError(
        "Password must include at least 8 characters, an uppercase letter, a number, and a special character.",
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      login({ email, password });
      navigate(ROUTES.HOME);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.input}
          type="email"
          placeholder="Insert email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => validateEmail(email)}
          required
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
        <label htmlFor="password">Password:</label>
        <input
          className={styles.input}
          type="password"
          placeholder="Insert password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onBlur={() => validatePassword(password)}
          required
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
      <div className={styles.link}>
        <Link to={ROUTES.REGISTER}>Don&apos;t have an account? Sign up</Link>
      </div>
    </div>
  );
}
