import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../../../components/FormComponents/FormGroup";
import { useHeaderDetails } from "../../../../context/HeaderContext";
import { SideBarPaths } from "../../SideBar/SidebarPaths";
import { initialFormData, validationSchema } from "./schema";
import { adminServices } from "../../../../service/admin-services";
import { toast } from "react-toastify";
// import { type } from "../../Academics/Faculty/schema";

const AddNewPermission = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Add Permission");
  }, []);

  const { mutate, isLoading } = useMutation(adminServices.storePermissions);

  const handleSubmit = (values) => {
    const { name } = values;
    mutate(
      { name },
      {
        onSuccess: (res) => {
          queryClient.invalidateQueries(['permissions'])
          toast.success(`${res.data.message}`);
          navigate(SideBarPaths.usermanagement.userPermissions);
        },
      }
    );
  };

  return (
    <div className="d-flex flex-column w-100 mt-3">
      <div className=" rounded p-4 d-flex flex-column  border-secondary border">
        <h2 className="fw-semibold h5">Add new Permission</h2>
        <p className="fw-light des mt-2">Specify exactly as per requirement</p>
        <Formik
          initialValues={initialFormData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            touched,
            errors,
            values,
            handleChange,
            setFieldValue,
            handleBlur,
          }) => (
            <>
              <div className="row w-100 d-flex ">
                <Form className="col-lg-3 d-flex flex-column mt-3">
                  <div className="">
                    <FormGroup
                      type="text"
                      label="Permission Name"
                      name="permissionName"
                      className="py-3"
                      errors={errors}
                      touched={touched}
                      value={values.name}
                      handleChange={(e) => {
                        setFieldValue("name", e.target.value);
                      }}
                      handleBlur={handleBlur}
                    />

                    {/* <Field
                    type="text"
                    name="name"
                    className="py-3"
                  /> */}
                  </div>

                  <div className="d-flex mt-4">
                    <Link
                      to={SideBarPaths.usermanagement.userPermissions}
                      className="btn btn-outline-purple rounded-border btn-form fw-semibold des d-flex align-items-center justify-content-center"
                    >
                      Cancel
                    </Link>
                    <button
                      className="btn-gradient-primary  d-flex  align-items-center justify-content-center ms-3 btn-form des "
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              </div>
            </>
          )}
        </Formik>
      </div>
      {/* <div className="d-flex mt-4">
        <Link
          to={SideBarPaths.usermanagement.userPermissions}
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
      </div> */}
    </div>
  );
};

export default AddNewPermission;
