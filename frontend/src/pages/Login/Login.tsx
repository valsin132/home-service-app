import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { login as loginApi } from "@/api/authApi";
import styles from "./Login.module.scss";

export function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { token, user } = await loginApi({ email, password }); // Call API
      login(token, user); // Update context and save token
      navigate(ROUTES.HOME); // Redirect to home
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleLogin} className={styles.formContainer}>
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
          Login
        </button>
      </form>
      <div className={styles.link}>
        <Link to={ROUTES.REGISTER}>Don&apos;t have an account? Sign up</Link>
      </div>
    </div>
  );
}
