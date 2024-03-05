import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import { commonFileComponents } from "../Constant.js";
import * as Yup from "yup";
import { userContext } from "../ContextFile/Context";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[^\s].*$/, "Name should not start with a space")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  gender: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

const ModelPopup = (props) => {
  const { getById, editUserData } = useContext(userContext);

  const formik = useFormik({
    initialValues: getById.id
      ? editUserData
      : {
          name: "",
          email: "",
          gender: "",
          status: "",
        },

    enableReinitialize: true,
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        getById.id
          ? await props.handlePut(getById?.id, values)
          : await props.handlePost(values);
        resetForm();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  const handleModalHide = () => {
    formik.resetForm();
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        onHide={handleModalHide}
      >
        <Modal.Header closeButton className="p-4">
          <Modal.Title id="contained-modal-title-vcenter">{commonFileComponents?.modelPopup?.addUser}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                {commonFileComponents?.modelPopup?.name}
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
              {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback">{formik.errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {commonFileComponents?.modelPopup?.email}
              </label>
              <input
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email && "is-invalid"
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
                {commonFileComponents?.modelPopup?.gender}
              </label>
              <select
                className="form-select"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {commonFileComponents?.optionGender?.map((item, index) => (
                  <option key={index} value={Object.keys(item)[0]}>
                    {Object.values(item)[0]}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                {commonFileComponents?.modelPopup?.status}
              </label>
              <select
                className="form-select"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {commonFileComponents?.optionStatus?.map((item, index) => (
                  <option key={index} value={Object.keys(item)}>
                    {Object.values(item)}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex justify-content-end mt-5 my-2">
              <button
                onClick={props.onHide}
                className="button-28 button-28-width"
              >
                {commonFileComponents?.modelPopup?.close}
              </button>
              <button type="submit" className="mx-2 button-28 button-28-width">
                {commonFileComponents?.modelPopup?.save}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModelPopup;
