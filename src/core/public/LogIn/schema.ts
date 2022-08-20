import * as Yup from "yup";

export type LoginFormType = {
  email: string;
  password: string;
};

export const initialLoginFormData: LoginFormType = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Plese enter your email"),
  password: Yup.string().required("Please enter your password"),
});
