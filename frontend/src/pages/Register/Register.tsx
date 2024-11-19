import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useState } from "react";
import { register } from "@/api/authApi";
import { RegistrationValues } from "@/types/auth";
import { Form, Formik, FormikConfig } from "formik";
import { registerInitialValues, registerValidationSchema } from "./consts";
import { FormikField } from "@/components/FormikField.tsx/FormikField";
import styles from "../Login/Login.module.scss";

type RegisterFormFormik = FormikConfig<RegistrationValues>;

export function Register() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister: RegisterFormFormik["onSubmit"] = async ({ name, email, password }) => {
    try {
      await register({ name, email, password });
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
        <Link to={ROUTES.LOGIN}>Already have an account? Log in</Link>
      </div>
    </div>
  );
}
