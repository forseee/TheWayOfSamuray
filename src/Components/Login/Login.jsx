import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserTC } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(LoginUserTC(values.email, values.password));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" />
            <div>
              <Field type="password" name="password" placeholder="password" />
            </div>
            <ErrorMessage name="password" component="div" />
            <div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
