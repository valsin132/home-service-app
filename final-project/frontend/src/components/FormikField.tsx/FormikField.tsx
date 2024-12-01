import { Field, ErrorMessage } from "formik";
import styles from "./FormikField.module.scss";

interface FormikFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function FormikField({ name, label, ...props }: FormikFieldProps) {
  return (
    <div className={styles.formContainer}>
      <label htmlFor={name}>{`${label}:`}</label>
      <Field name={name} {...props} className={styles.input} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
}
