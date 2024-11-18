import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useState } from "react";
import { register } from "@/api/authApi";
import styles from "../Login/Login.module.scss";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await register({ name, email, password });
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {error && <small>{error}</small>}
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="name"
            placeholder="Insert name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Insert email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Insert password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.submitButton} type="submit">
          Register
        </button>
      </form>
      <div className={styles.link}>
        <Link to={ROUTES.LOGIN}>Already have an account? Log in</Link>
      </div>
    </div>
  );
}
