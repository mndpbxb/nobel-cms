import * as Yup from "yup";

export type FormType = {
  facultyName: string;
};

export const initialFormData: FormType = {
  facultyName: "",
};

export const validationSchema = Yup.object().shape({
  facultyName: Yup.string().required("Please enter faculty name"),
});
