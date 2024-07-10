import CenterForm from "../components/CenterForm";
import PasswordField from "../components/PasswordField";
import TextField from "../components/TextField";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const contentAfterButton: React.ReactNode = (
    <>
      <div className="text-center pt-5 pb-2">or continue with</div>
      <ThirdPartyAuth />
      <small className="d-block text-center">
        Don't have an account yet? <Link to="/signup">Register here</Link>
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
          title={"Login"}
          logo={true}
          logoPath={logo}
          contentAfterButton={contentAfterButton}
        >
          <TextField label={"Email"} placeholder={"Enter your email"} />
          <PasswordField />
          <small>
            <a className="text-decoration-none form-text text-muted">
              Forgot password?
            </a>
          </small>
        </CenterForm>
      </body>
    </>
  );
};

export default Login;
