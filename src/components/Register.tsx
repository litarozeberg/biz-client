import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../services/usersService";
import { User } from "../interfaces/User";
import { errorMsg, succesMsg } from "../services/feedbacksService";
import Navbar from "./Navbar";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", biz: false },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email("Invalid Email"),
      password: yup
        .string()
        .required()
        .min(8, "Too short! Should be a least 8 characters"),
      biz: yup.boolean().required()
    }),
    onSubmit: (values: User) => {
      addUser(values)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          succesMsg("You registered successfully");
          navigate("/home");
        })
        .catch((err) => {
            errorMsg(err.response.data);
        });
    },
  });

  return (
    <>
      <Navbar isLogged={false} isAdmin={false} />
      <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
        <h1 className="display-5 text-center my-3">Register</h1>
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
          />
          <label htmlFor="name">Name</label>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p className="text-danger">{formik.errors.name}</p>
        ) : null}
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
          />
          <label htmlFor="email">Email address</label>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-danger">{formik.errors.email}</p>
        ) : null}
        <div className="mb-3 form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-danger">{formik.errors.password}</p>
        ) : null}
        <div className=" form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="biz"
            name="biz"
            role="switch"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label" htmlFor="biz">
            Business
          </label>
        </div>
        {formik.touched.biz && formik.errors.biz ? (
          <p className="text-danger">{formik.errors.biz}</p>
        ) : null}
        <div>
          <button
            type="submit"
            className="btn btn-secondary w-100 my-2"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </button>
          <p className="tect-center mt-3">
            <Link to="/SignIn">Already have user?Login here</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
