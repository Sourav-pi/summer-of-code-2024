import CenterForm from "../components/CenterForm";
import PasswordField from "../components/PasswordField";
import TextField from "../components/TextField";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
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

  return (
    <>
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
        >
          <TextField label={"Email"} placeholder={"Enter your email"} />
          <PasswordField />
          <PasswordField
            label={"Confirm Password"}
            placeholder={"Re-enter your password"}
          />
        </CenterForm>
      </body>
    </>
  );
};

export default signup;
