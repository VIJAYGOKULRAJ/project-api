import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userContext } from "../ContextFile/Context";


const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  gender: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

const ModelPopup = (props) => {
  const { getById , setgetById  , editUserData} = useContext(userContext);
console.log(getById )

  const formik = useFormik({
    initialValues: getById.id ? editUserData : {
      name : '',
      email : '',
      gender : '',
      status : ''
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await props.handlePost(values);
        resetForm()
        props.onHide()
        
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
 
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="p-4" >
          <Modal.Title id="contained-modal-title-vcenter" >Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "is-invalid" : ""
                }`}
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select
                className="form-select"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status:
              </label>
              <select
                className="form-select"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
              </select>
            </div>
            <div className="d-flex justify-content-end my-2">
              <Button onClick={props.onHide} className="">
                Close
              </Button>
              <Button type="submit" className="mx-2">
                Save
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModelPopup;
