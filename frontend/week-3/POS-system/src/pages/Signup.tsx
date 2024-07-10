import CenterForm from "../components/CenterForm";
import PasswordField from "../components/PasswordField";
import TextField from "../components/TextField";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import MsgBox from "../components/MsgBox";
import { schema } from "../validation/NewUserValidation";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const signup = () => {
  const contentAfterButton: React.ReactNode = (
    <>
      <div className="text-center pt-5 pb-2">or continue with</div>
      <ThirdPartyAuth />
      <small className="d-block text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </small>
    </>
  );

  const validate = async () => {
    const usernameField = document.getElementById(
      "Username"
    ) as HTMLInputElement;
    const passwordField = document.getElementById(
      "Password"
    ) as HTMLInputElement;
    const confirmPasswordField = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    const errorField = document.getElementById("MsgBox") as HTMLInputElement;
    const errorText = document.getElementById("msg") as HTMLInputElement;

    const form = {
      username: usernameField.value,
      password: passwordField.value,
      confirmPassword: confirmPasswordField.value,
    };
    const isValid = await schema.isValid(form);
    console.log(isValid);
    if (isValid) {
      errorField.style.display = "block";
      errorField.classList.replace("text-danger", "text-success");
      errorText.textContent = "success: Sign up successful!";
      // send post request here
    } else {
      await schema.validate(form).catch((err) => {
        errorField.style.display = "block";
        errorText.textContent = err.message;
      });
    }
  };

  return (
    <body
      style={{
        backgroundImage: 'url("src/assets/images/background.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <CenterForm
        title={"Signup"}
        logo={true}
        logoPath={logo}
        contentAfterButton={contentAfterButton}
        onSubmit={validate}
      >
        <TextField label={"Username"} placeholder={"Enter your username"} />
        <PasswordField />
        <PasswordField
          id={"confirmPassword"}
          label={"Confirm Password"}
          placeholder={"Re-enter your password"}
        />
        <MsgBox></MsgBox>
      </CenterForm>
    </body>
  );
};

export default signup;
