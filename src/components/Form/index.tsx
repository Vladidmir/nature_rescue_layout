import { FC } from "react";

import { Formik, Form as FForm, Field, ErrorMessage } from "formik";

import feathers from "../../assets/img/feathers.png";
import { Button } from "components";
import { createValidationSchema } from "./validation";

import s from "./form.module.scss";

interface FormData {
  name: string;
  email: string;
  phone?: string;
}

interface IFormProps {
  laout: "login" | "register";
}

export const Form: FC<IFormProps> = ({ laout }) => {
  const validationSchema = createValidationSchema(laout);
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values: FormData, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, values }) => (
        <FForm className={s.form}>
          <div className={s.feathers}>
            <img src={feathers} alt="feathers.png" />
          </div>
          <h3>{laout === "login" ? "Log in" : "Register"}</h3>

          <label>
            <Field name="name" />

            <ErrorMessage name="name">
              {(errorMessage) => (
                <span className={s.error}>{errorMessage}</span>
              )}
            </ErrorMessage>
          </label>

          <label>
            <Field name="email" />
            <ErrorMessage name="email">
              {(errorMessage) => (
                <span className={s.error}>{errorMessage}</span>
              )}
            </ErrorMessage>
          </label>

          {laout === "register" && (
            <label>
              <Field name="phone" />
              <ErrorMessage name="phone">
                {(errorMessage) => (
                  <span className={s.error}>{errorMessage}</span>
                )}
              </ErrorMessage>
            </label>
          )}

          <Button
            type="submit"
            laout="primary"
            disabled={
              isSubmitting ||
              !values.name ||
              !values.email ||
              (laout === "register" && !values.phone) ||
              !!Object.keys(errors).length
            }
          >
            {laout === "register" ? "Register" : "Book a demo"}
          </Button>
        </FForm>
      )}
    </Formik>
  );
};
