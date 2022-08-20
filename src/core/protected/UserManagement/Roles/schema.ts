import * as Yup from "yup";

export type FormType = {
  roleName: string;
  permissions: any[];
};

export const initialFormData: FormType = {
  roleName: "",
  permissions: [],
};

export const validationSchema = Yup.object().shape({
  roleName: Yup.string().required("Please enter role name"),
  permissions: Yup.array().test({
    name: "permissions",
    exclusive: true,
    message: "Permission is required",
    test: (value) => value.length > 0,
  }),
});
