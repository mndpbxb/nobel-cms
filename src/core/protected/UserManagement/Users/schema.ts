import * as Yup from "yup";

export type FormType = {
  role: string;
};

export const initialFormData: FormType = {
  role: "",
};

export const validationSchema = Yup.object().shape({
  role: Yup.string().required("Please select a role"),
});

export type UserFormType = {
  name: string;
  joinedDate: string;
  gender: string;
  dateOfBirth: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  guardianName?: string;
  guardianPhone?: string;
  role: string;
};

export const userInitialFormData: UserFormType = {
  name: "",
  joinedDate: "",
  gender: "",
  dateOfBirth: "",
  emailAddress: "",
  phoneNumber: "",
  address: "",
  guardianName: "",
  guardianPhone: "",
  role: "",
};

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name"),
  joinedDate: Yup.string().required("Please specify the joined date"),
  gender: Yup.string().required("Please select a gender"),
  dateOfBirth: Yup.string().required("Please specify the date of birth"),
  emailAddress: Yup.string().required("Please provide the email address"),
  phoneNumber: Yup.string().required("Please provide a phone number"),
  address: Yup.string().required("Please provide a address"),
  role: Yup.string().required("Please select a role"),

  guardianName: Yup.string().when("role", {
    is: "1",
    then: Yup.string().required("Students' guardian name is required"),
  }),
  guardianPhone: Yup.string().when("role", {
    is: "1",
    then: Yup.string().required("Students' guardian phone is required"),
  }),
});

export enum ROLES {
  STUDENT = "1",
  TEACHER = "2",
}
