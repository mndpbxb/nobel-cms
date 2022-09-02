import * as Yup from "yup";

export type FormType = {
  name: string;
  permissions: any[];
};

export const initialFormData: FormType = {
  name: "",
  permissions: [],
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter role name"),
  permissions: Yup.array().required("Permissions required"),
});
