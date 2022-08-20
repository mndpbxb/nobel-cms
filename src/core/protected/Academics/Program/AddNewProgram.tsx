import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../../../components/FormComponents/FormGroup";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { initialFormData, validationSchema } from "./schema";

const AddNewProgram = () => {
  const formRef = useRef(null);
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Add Program");
  }, []);

  return (
    <div className="d-flex flex-column w-100 mt-3">
      <div className=" rounded p-4 d-flex flex-column border-secondary border">
        <h2 className="fw-semibold h5">Add new Program</h2>
        <p className="fw-light des mt-2">Specify exactly as per requirement</p>
        <Formik
          initialValues={initialFormData}
          validationSchema={validationSchema}
          innerRef={formRef}
          onSubmit={(values, { resetForm }) => {}}
        >
          {({
            handleSubmit,
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
          }) => (
            <div className="row w-100 d-flex ">
              <Form className="col-lg-3 d-flex flex-column mt-3">
                <div className="">
                  <FormGroup
                    type="text"
                    label="Program Name"
                    name="programName"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.programName}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div className="d-flex mt-4">
        <Link
          to={SideBarPaths.academics.program}
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
          Save
        </div>
      </div>
    </div>
  );
};

export default AddNewProgram;
