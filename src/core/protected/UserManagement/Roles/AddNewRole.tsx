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
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormGroup from "../../../../components/FormComponents/FormGroup";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { adminServices } from "../../../../service/admin-services";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { initialFormData, validationSchema } from "./schema";

const AddNewRole = () => {
  const formRef = useRef(null);
  const headerDetails = useHeaderDetails();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(adminServices.storeRoles);
  const [permissions, setPermission] = useState([]);
  // const [options, setOptions] = useState([]);

  const { data, isSuccess } = useQuery(["permissions"], () =>
    adminServices.getPermissions(true)
  );
  useEffect(() => {
    headerDetails.setSubHeader("Add Role");
  }, []);

  if (!isSuccess) return <>Loading</>;

  const options = [];
  data.map((row) =>
    options.push({
      label: row.name,
      value: row.id,
    })
  );
  const handleSubmit = (values) => {
    const { name, permissions } = values;
    mutate(
      { name, permissions },
      {
        onSuccess: (res) => {
          toast.success(`${res.data.message}`);
          navigate(SideBarPaths.usermanagement.userPermissions);
        },
      }
    );
  };
  // console.log(data);

  // data.map((row) =>
  //   setOptions((oldValues) => [
  //     ...oldValues,
  //     {
  //       label: row.name,
  //       value: row.id,
  //     },
  //   ])
  // );

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
            setFieldValue,
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
                      value={values.name}
                      handleBlur={handleBlur}
                      handleChange={(e) => {
                        setFieldValue("name", e.target.value);
                      }}
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
                    handleChange={(e: any) => {
                      setFieldValue(
                        "permissions",

                        [...values.permissions, e.target.value]
                      );
                    }}
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
