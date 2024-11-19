import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { login as loginApi } from "@/api/authApi";
import { LoginValues } from "@/types/auth";
import { Form, Formik, FormikConfig } from "formik";
import { loginInitialValues, loginValidationSchema } from "./consts";
import { FormikField } from "@/components/FormikField.tsx/FormikField";
import styles from "./Login.module.scss";

type LoginFormFormik = FormikConfig<LoginValues>;

export function Login() {
  const { login } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin: LoginFormFormik["onSubmit"] = async ({ email, password }) => {
    try {
      const { token, user } = await loginApi({ email, password });
      login(token, user);
      navigate(ROUTES.HOME);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {error && <small className={styles.error}>{error}</small>}
      <Formik
        onSubmit={handleLogin}
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        className={styles.formContainer}
      >
        <Form>
          <div className={styles.inputContainer}>
            <FormikField name="email" type="email" label="Email" placeholder="Input email" />
            <FormikField
              name="password"
              type="password"
              label="Password"
              placeholder="Input password"
            />
            <button className={styles.submitButton} type="submit">
              Log in
            </button>
          </div>
        </Form>
      </Formik>
      <div className={styles.link}>
        <Link to={ROUTES.REGISTER}>Don&apos;t have an account? Sign up</Link>
      </div>
    </div>
  );
}
