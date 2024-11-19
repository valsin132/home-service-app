import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useState } from "react";
import { RegistrationValues } from "@/types/auth";
import { Form, Formik, FormikConfig } from "formik";
import { registerInitialValues, registerValidationSchema } from "./consts";
import { FormikField } from "@/components/FormikField.tsx/FormikField";
import { useRegisterUser } from "./hooks";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from "./Login.module.scss";

type RegisterFormFormik = FormikConfig<RegistrationValues>;

export function Register() {
  const { mutateAsync: registerUser } = useRegisterUser();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister: RegisterFormFormik["onSubmit"] = async ({ name, email, password }) => {
    try {
      await registerUser({ name, email, password });
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      {error && <small className={styles.error}>{error}</small>}
      <Formik
        onSubmit={handleRegister}
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        className={styles.formContainer}
      >
        <Form>
          <div className={styles.inputContainer}>
            <FormikField name="name" type="text" label="Name" placeholder="Input name" />
            <FormikField name="email" type="email" label="Email" placeholder="Input email" />
            <FormikField
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Input password"
            />
            <button
              type="button"
              aria-label={showPassword ? "Password Visible" : "Password Invisible."}
              className={styles.passwordButton}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
            <button className={styles.submitButton} type="submit">
              Log in
            </button>
          </div>
        </Form>
      </Formik>
      <div className={styles.link}>
        <Link to={ROUTES.LOGIN}>Already have an account? Log in</Link>
      </div>
    </div>
  );
}
