import * as yup from "yup";
export const CustomerValidation = yup.object().shape({
  name: yup.string(),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, "mobile number can only contain 0-9")
    .length(10, "moble number must be of 10 digits")
    .required("required"),
  address: yup.string(),
});
