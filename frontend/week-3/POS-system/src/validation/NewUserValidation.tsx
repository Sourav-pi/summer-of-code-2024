import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .max(10, "Password must be at most 10 characters.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .max(10, "Password must be at most 10 characters.")
    .oneOf([yup.ref("password"), ""], "Passwords must match.")
    .required("Password is required."),
});
