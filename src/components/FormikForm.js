import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string().required("Required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div>
        <h1>Formik Form </h1>
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="text" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit">submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default FormikForm;
