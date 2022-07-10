import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormError from "./FormError";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const ClientForm = ({ client, isLoading }) => {
  const navigate = useNavigate();

  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(25, "Name is too long")
      .required("Client's name is required."),
    company: Yup.string().required("Client's company is required."),
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Client's email is required."),
    mobile: Yup.number()
      .positive("Number is not valid.")
      .integer("Number is not valid.")
      .typeError("Number is not valid."),
  });

  const handleSubmit = async (values) => {
    try {
      let response;
      if (client.id) {
        const url = import.meta.env.VITE_API_URL + `/${client.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      if (!response.ok) return;

      console.log(response);
      const result = await response.json();
      console.log(result);

      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase">
        {client?.name ?? "Add Client"}
      </h1>
      <Formik
        initialValues={{
          name: client?.name ?? "",
          company: client?.company ?? "",
          email: client?.email ?? "",
          mobile: client?.mobile ?? "",
          notes: client?.notes ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="clients name"
                  name="name"
                />
                {errors.name && touched.name && (
                  <FormError>{errors.name}</FormError>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="client's company name"
                  name="company"
                />
                {errors.company && touched.company && (
                  <FormError>{errors.company}</FormError>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="client's email"
                  name="email"
                />
                {errors.email && touched.email && (
                  <FormError>{errors.email}</FormError>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="mobile">
                  Mobile
                </label>
                <Field
                  id="mobile"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="client's mobile"
                  name="mobile"
                />
                {errors.mobile && touched.mobile && (
                  <FormError>{errors.mobile}</FormError>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes
                </label>
                <Field
                  id="notes"
                  type="text"
                  as="textarea"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="client's notes"
                  name="notes"
                />
              </div>
              <input
                type="submit"
                value={
                  Object.keys(client).length == 0
                    ? "Add Client"
                    : "Update Client"
                }
                className="mt-5 w-full bg-blue-300 p-3 text-white uppercase font-bold text-lg hover:bg-blue-500"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ClientForm.defaultProps = {
  client: {},
  loading: false,
};

export default ClientForm;
