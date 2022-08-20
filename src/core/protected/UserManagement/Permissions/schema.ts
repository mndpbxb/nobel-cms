import * as Yup from "yup";

export type FormType = {
  permissionName: string;
};

export const initialFormData: FormType = {
  permissionName: "",
};

export const validationSchema = Yup.object().shape({
  permissionName: Yup.string().required("Please enter permission name"),
});
