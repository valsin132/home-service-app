import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginValues } from "@/types/auth";
import { ShowPasswordButton } from "./ShowPasswordButton";
import { Form, Formik, FormikConfig } from "formik";
import { loginInitialValues, loginValidationSchema } from "./consts";
import { FormikField } from "@/components/FormikField.tsx/FormikField";
import { useLoginUser } from "./hooks";
import styles from "./LoginRegister.module.scss";

type LoginFormFormik = FormikConfig<LoginValues>;

export function LoginForm() {
  const { login } = useContext(UserContext);
  const { mutateAsync: loginUser } = useLoginUser();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin: LoginFormFormik["onSubmit"] = async ({ email, password }) => {
    try {
      const { token, user } = await loginUser({ email, password });
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
            <div className={styles.passwordFieldContainer}>
              <FormikField
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Input password"
              />
              <ShowPasswordButton
                showPassword={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
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
