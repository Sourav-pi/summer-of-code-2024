import { useState } from "react";
import eyeClose from "../assets/images/eyeClose.png";
import eyeOpen from "../assets/images/eyeOpen.png";

interface Props {
  label?: string;
  placeholder?: string;
}

const PasswordField = ({
  label = "Password",
  placeholder = "Enter your password",
}: Props) => {
  let [showPassState, setShowPassState] = useState(false);
  return (
    <>
      <div className="input-group mb-3">
        <div className="form-group form-floating">
          <input
            type={showPassState ? "text" : "password"}
            className="form-control"
            id={label}
            placeholder={placeholder}
          />
          <label htmlFor={label}>{label}</label>
        </div>
        <div
          className="input-group-text"
          onClick={() => setShowPassState(!showPassState)}
          style={{ width: "50px", cursor: "pointer" }}
        >
          <img
            id="eye1"
            className="eye"
            src={showPassState ? eyeOpen : eyeClose}
            alt="eye"
            style={{ width: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default PasswordField;
