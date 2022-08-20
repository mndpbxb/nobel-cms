import { Form, Formik } from "formik";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../../../components/FormComponents/FormGroup";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import {
  initialFormData,
  validationSchema,
  userInitialFormData,
  userValidationSchema,
  ROLES,
} from "./schema";

const AddNewUser = () => {
  const formRef = useRef(null);

  return (
    <div className="d-flex flex-column w-100 mt-3">
      <h1 className="fw-bold h4">Registration</h1>
      <p className="fw-light des mt-2">
        Fill in the registration data. It will take a couple of minutes. All you
        need is a phone number and e-mail
      </p>

      <div className=" rounded p-4 d-flex flex-column mt-4 border-secondary border">
        <h2 className="fw-semibold h5">User Registration Form</h2>
        <p className="fw-light des mt-2">Specify exactly as per requirement</p>
        <Formik
          initialValues={userInitialFormData}
          validationSchema={userValidationSchema}
          innerRef={formRef}
          onSubmit={(values, { resetForm }) => {}}
        >
          {({
            handleSubmit,
            touched,
            errors,
            values,
            handleChange,
            setFieldValue,
            handleBlur,
          }) => (
            <Form className="mt-3">
              <div className="row w-100 g-4">
                <div className="col-3">
                  <FormGroup
                    type="select"
                    label="User Role"
                    name="role"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.role}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("role", e.target.value);
                    }}
                    options={[
                      { label: "Student", value: "1" },
                      { label: "Teacher", value: "2" },
                    ]}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="text"
                    label="Full Name"
                    name="name"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="email"
                    label="Email Address"
                    name="emailAddress"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.emailAddress}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="select"
                    label="Gender"
                    name="gender"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.gender}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("gender", e.target.value);
                    }}
                    options={[
                      { label: "Male", value: "1" },
                      { label: "Female", value: "2" },
                    ]}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="number"
                    label="Phone Number"
                    name="phoneNumber"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.phoneNumber}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="date-picker"
                    label="Date Of Birth"
                    name="dateOfBirth"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.dateOfBirth}
                    handleBlur={handleBlur}
                    handleChange={(date) => {
                      setFieldValue("dateOfBirth", date);
                    }}
                  />
                </div>
                <div className="col-3">
                  <FormGroup
                    type="date-picker"
                    label="Join Date"
                    name="joinedDate"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.joinedDate}
                    handleBlur={handleBlur}
                    handleChange={(date) => {
                      setFieldValue("joinedDate", date);
                    }}
                  />
                </div>
                <div className="col-6">
                  <FormGroup
                    type="text"
                    label="Address"
                    name="address"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.address}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                {values.role === ROLES.STUDENT && (
                  <>
                    <div className="col-3">
                      <FormGroup
                        type="text"
                        label="Guardian Name"
                        name="guardianName"
                        className="py-3"
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        value={values.guardianName}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="col-3">
                      <FormGroup
                        type="text"
                        label="Guardian Phone"
                        name="guardianPhone"
                        className="py-3"
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        value={values.guardianPhone}
                        handleChange={handleChange}
                      />
                    </div>
                  </>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="d-flex mt-4">
        <Link
          to={SideBarPaths.usermanagement.users}
          className="btn btn-outline-purple rounded-border btn-form fw-semibold des d-flex align-items-center justify-content-center"
        >
          Cancel
        </Link>
        <div
          role={"button"}
          className="btn-gradient-primary  d-flex  align-items-center justify-content-center ms-3 btn-form des "
          onClick={() => {
            formRef?.current?.handleSubmit();
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
