import * as Yup from "yup";

export type FormType = {
  name: string;
};

export const initialFormData: FormType = {
  name: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter permission name"),
});
