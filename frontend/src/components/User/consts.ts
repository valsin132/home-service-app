import * as Yup from "yup";
import { LoginValues } from "@/types/auth";
import { RegistrationValues } from "@/types/auth";

export const loginValidationSchema: Yup.Schema<LoginValues> = Yup.object().shape({
  email: Yup.string().required("Email is required.").email("Email is not valid"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(32, "Password must be at most 32 characters.")
    .matches(/[a-zžųšįėęčą]+/, "Password must contain at least one lowercase letter.")
    .matches(/[A-ZŽŪŲŠĮĖĘČĄ]+/, "Password must contain at least one uppercase letter."),
});

export const loginInitialValues: LoginValues = {
  email: "",
  password: "",
};

export const registerValidationSchema: Yup.Schema<RegistrationValues> = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string().required("Email is required.").email("Email is not valid"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(32, "Password must be at most 32 characters.")
    .matches(/[a-zžųšįėęčą]+/, "Password must contain at least one lowercase letter.")
    .matches(/[A-ZŽŪŲŠĮĖĘČĄ]+/, "Password must contain at least one uppercase letter."),
});

export const registerInitialValues: RegistrationValues = {
  name: "",
  email: "",
  password: "",
};
