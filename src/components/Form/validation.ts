import * as Yup from "yup";
export const createValidationSchema = (type: "register" | "login") => {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(30, "Name must be no more than 30 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    phone:
      type === "register"
        ? Yup.string()
            .required("Phone is required")
            .matches(/^\d{10}$/, "Phone must be a valid 10-digit phone number")
        : Yup.string(),
  });
};
