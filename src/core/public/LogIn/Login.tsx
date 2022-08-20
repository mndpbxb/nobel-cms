import { Form, Formik, replace, validateYupSchema } from "formik";
import { useMutation } from "react-query";
import FormGroup from "../../../components/FormComponents/FormGroup";
import { initialLoginFormData, validationSchema } from "./schema";
import makeApiRequest from "../../../service/api-service";
import { apiList } from "../../../assets/apiList";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const mutation = useMutation(
    (requestData: any) => {
      return makeApiRequest(apiList.login, requestData);
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("access_token", data?.data?.token);
        navigate("/");
        console.log(data);
      },
    }
  );

  return (
    <>
      <div className="container-fluid h-100 p-5  vh-100 d-flex flex-column scrollable">
        <div className="d-block">
          <div className="d-flex h-100 flex-column overflow-auto align-items-center justify-content-center  w-100 ">
            <div className="d-flex align-items-center text-dark-blue fw-semibold fs-4 font-primary ">
              <div className="ms-2 m-0">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="38"
                    height="38"
                    fill="white"
                    fillOpacity="0.01"
                  />
                  <path
                    d="M3.11374 5.66175C3.13768 5.23083 3.59511 4.96536 3.98114 5.15838L12.3171 9.32634C12.5284 9.43201 12.6581 9.65189 12.6482 9.88798L11.888 28.1338C11.8786 28.3586 11.7442 28.5593 11.5399 28.6536L2.48691 32.8319C2.07614 33.0215 1.6113 32.7056 1.6364 32.2539L3.11374 5.66175Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M34.8863 5.66175C34.8623 5.23083 34.4049 4.96536 34.0189 5.15838L25.6829 9.32634C25.4716 9.43201 25.3419 9.65189 25.3518 9.88798L26.112 28.1338C26.1214 28.3586 26.2558 28.5593 26.4601 28.6536L35.5131 32.8319C35.9239 33.0215 36.3887 32.7056 36.3636 32.2539L34.8863 5.66175Z"
                    fill="#FDAD15"
                  />
                  <path
                    d="M14.2168 10.2734C14.2313 9.91065 14.6153 9.6838 14.94 9.84614L18.5505 11.6514C18.832 11.7922 19.1634 11.7922 19.4449 11.6514L23.0555 9.84614C23.3801 9.6838 23.7641 9.91065 23.7787 10.2734L24.5178 28.7519C24.5313 29.0888 24.3741 29.4097 24.0998 29.6056L19.3465 33.0009C19.1378 33.1499 18.8576 33.1499 18.649 33.0009L13.8956 29.6056C13.6213 29.4097 13.4642 29.0888 13.4776 28.7519L14.2168 10.2734Z"
                    fill="#2AC670"
                  />
                </svg>
              </div>
              <p className="ms-2 m-0">{process.env.REACT_APP_COLLEGE_NAME}</p>
            </div>
            <p className="text-dark-blue fw-semibold fs-1 font-primary my-4">
              Welcome back
            </p>
            <p className="text-center text-secondary fs-4 fw-normal font-primary">
              Don't miss your next opportunity. Sign in to stay updated on your
              professional world.
            </p>
            <div className="mt-5">
              <img
                src="/load2.gif"
                style={{ height: "170px" }}
                alt="Computer load "
              />
            </div>
            <div className="w-100 d-flex align-items-center flex-column mt-5">
              <Formik
                initialValues={initialLoginFormData}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("LOGGING IN");
                  mutation.mutate(values);
                }}
              >
                {({
                  handleSubmit,
                  touched,
                  errors,
                  values,
                  handleChange,
                  handleBlur,
                }) => (
                  <div className="row w-100 d-flex  align-items-center justify-content-center">
                    <Form className="col-lg-3 d-flex flex-column p-0">
                      <div className="">
                        <FormGroup
                          type="email"
                          label="Email Address"
                          name="email"
                          className="py-3"
                          errors={errors}
                          touched={touched}
                          value={values.email}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div className="mt-3">
                        <FormGroup
                          type="password"
                          label="Password"
                          name="password"
                          className="py-3"
                          errors={errors}
                          touched={touched}
                          value={values.password}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div
                        role={"button"}
                        className="btn-gradient-primary text-uppercase py-3 text-center mt-3"
                        onClick={() => handleSubmit()}
                      >
                        Continue
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
              <p className="fs-5 font-primary my-3 align-items-center d-flex">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
                <span className="ms-2">Remember Me</span>
              </p>
            </div>
          </div>
        </div>
        <p className="align-self-end justify-content-end  mt-auto fs-5 fw-normal font-primary align-self-end">
          Request for new account
        </p>
      </div>
    </>
  );
};

export default Login;
