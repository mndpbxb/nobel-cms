import * as Yup from "yup";

export type FormType = {
  programName: string;
};

export const initialFormData: FormType = {
  programName: "",
};

export const validationSchema = Yup.object().shape({
  programName: Yup.string().required("Please enter program name"),
});
