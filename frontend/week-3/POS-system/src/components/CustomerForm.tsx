import { useFormik } from "Formik";
import { CustomerValidation } from "../validation/CustomerValidation";
import "./CustomerForm.css";
import { useState } from "react";

interface Props {
  onSubmit: any;
  style: React.CSSProperties;
}

const CustomerForm = ({ onSubmit, style }: Props) => {
  const [submited, setSubmited] = useState(false);
  const headStyle = {
    fontWeight: "normal",
    paddingBottom: "1rem",
    borderBottom: "2px solid #FF7A28",
    color: "#FF7A28",
    marginBottom: "2rem",
  };
  const divStyle = {};
  const lableStyle = { margin: "0px" };
  const fieldStyle = { width: "70%" };
  const { handleSubmit, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: CustomerValidation,
    onSubmit: (values) => {
      // console.log(values);
      setSubmited(true);
      fetch("https://dsoc-2024.webredirect.org/api/staff/customer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.message == "Customer added!") {
            sessionStorage.setItem("customerID", data.customerID);
            sessionStorage.setItem("customerName", data.name);
          }
          onSubmit(values);
        })
        .catch((error) => {
          console.error(error);
          setSubmited(false);
        });
    },
  });
  console.log(errors);
  return (
    <div
      className="container bg-white rounded-4 p-5"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <h1 style={headStyle}>CUSTOMER DETAILS</h1>
      <div className="h-100">
        <form onSubmit={handleSubmit} className="form h-100">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gridTemplateRows: "auto auto 1fr",
              gridTemplateAreas: `'a' 'b' 'c'`,
              height: "100%",
              padding: "20px 0px",
            }}
          >
            <div style={{ gridArea: "a", ...divStyle }}>
              <div className="arrangeContainer">
                <label
                  htmlFor="name"
                  className="form-label d-inline fs-4"
                  style={lableStyle}
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter customer name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name
                      ? "error form-control d-inline"
                      : "form-control d-inline"
                  }
                  style={fieldStyle}
                />
              </div>
              <div className="text-danger d-block errorMsg">
                {errors.name ? errors.name : ""}
              </div>
            </div>

            <div style={{ gridArea: "b", ...divStyle }}>
              <div className="arrangeContainer">
                <label
                  htmlFor="phone"
                  className="form-label d-inline fs-4"
                  style={lableStyle}
                >
                  MOBILE*
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter customer mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phone
                      ? "error form-control d-inline"
                      : "form-control d-inline"
                  }
                  style={fieldStyle}
                />
              </div>
              <div className="text-danger d-block errorMsg">
                {errors.phone ? errors.phone : ""}
              </div>
            </div>

            <div style={{ gridArea: "c", ...divStyle }}>
              <div
                className="arrangeContainer h-100"
                style={{ alignItems: "flex-start !important" }}
              >
                <label
                  htmlFor="address"
                  className="form-label d-inline fs-4"
                  style={lableStyle}
                >
                  ADDRESS
                </label>

                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter customer address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address
                      ? "error form-control d-inline h-100 "
                      : "form-control d-inline h-100 "
                  }
                  style={fieldStyle}
                />
              </div>
              <div className="text-danger d-block errorMsg">
                {errors.address ? errors.address : ""}
              </div>
            </div>
          </div>
          <div className="arrangeContainer">
            <div className="text-muted d-inline">
              {"(*) marked fields are mandatory"}
            </div>
            <button
              type="submit"
              {...(submited ? { disabled: true } : null)}
              className="btn submit-btn fs-5"
            >
              GO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
