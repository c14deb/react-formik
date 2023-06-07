import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};



// const validate = (values) => {

//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;

// };

const validationSchema =  Yup.object({
    name: Yup.string().required('required!'),
    email: Yup.string()
    .email('invalid email format')
    .required('Required!'),
    channel: Yup.string().required('Required!')
})



const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

  // console.log('formik values', formik.values);
//   console.log("formik errors", formik.errors);
console.log("Visited Fields", formik.touched);




  return (
    <div>
      <h1>Formik Form Validation</h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name  && formik.touched.name ? (<div className="error">{formik.errors.name}</div>) : null}
        </div>

        <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (<div className="error">{formik.errors.email}</div>) : null}
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.errors.channel && formik.touched.channel ? (<div className="error">{formik.errors.channel}</div>) : null}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
