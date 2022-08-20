import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  FormGroup as MFormGroup,
  FormLabel,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../../../components/FormComponents/FormGroup";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { initialFormData, validationSchema } from "./schema";

const AddNewRole = () => {
  const formRef = useRef(null);
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Add Role");
  }, []);

  const options = [
    { label: "BSC", value: "1" },
    { label: "BSC", value: "2" },

    { label: "BSC", value: "3" },

    { label: "BSC", value: "4" },

    { label: "BSC", value: "6" },

    { label: "BSC", value: "5" },
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <div className="rounded p-4 d-flex flex-column  border-secondary border">
        <h2 className="fw-semibold h5">Add new Role</h2>
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
            <>
              <Form className="">
                <div className="row w-100 ">
                  <div className="col-lg-3 mt-3">
                    <FormGroup
                      type="text"
                      label="Role Name"
                      name="roleName"
                      errors={errors}
                      touched={touched}
                      value={values.roleName}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <h2 className="fw-semibold h5 mt-5">Role Permission</h2>
                <p className="fw-light des mt-2">
                  Specify exactly as per requirement
                </p>
                <div className="mt-3">
                  <FormGroup
                    type="checkbox"
                    label="Role Name"
                    name="permissions"
                    errors={errors}
                    touched={touched}
                    value={values.permissions}
                    handleChange={handleChange}
                    options={options}
                  />
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
      <div className="d-flex mt-4">
        <Link
          to={SideBarPaths.usermanagement.userRole}
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

export default AddNewRole;
