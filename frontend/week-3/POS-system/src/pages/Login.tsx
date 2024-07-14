import CenterForm from "../components/CenterForm";
import PasswordField from "../components/PasswordField";
import TextField from "../components/TextField";
import ThirdPartyAuth from "../components/ThirdPartyAuth";
import MsgBox from "../components/MsgBox";
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

  const handelSubmit = () => {
    var username = document.getElementById("Username") as HTMLInputElement;
    var password = document.getElementById("Password") as HTMLInputElement;
    var msgbox = document.getElementById("MsgBox") as HTMLInputElement;
    var msg = document.getElementById("msg") as HTMLInputElement;

    const requestURL = "https://dsoc-2024.webredirect.org/api/login/";

    fetch(requestURL, {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["message"] == "Login Successful") {
          let token = data["token"];
          sessionStorage.setItem("token", token);
          console.log(sessionStorage.getItem("token"));
          window.location.replace(`./cashier-dashboard/cashier`);
          msgbox.classList.replace("text-danger", "text-success");
        }
        msgbox.style.display = "block";
        msg.textContent = data["message"];
      })

      .catch((error) => {
        console.log("error:", error);
        msgbox.style.display = "block";
        msg.textContent = "Some error occured : " + error;
      });
  };

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
          onSubmit={handelSubmit}
        >
          <TextField label={"Username"} placeholder={"Enter your username"} />
          <PasswordField />
          <small>
            <a className="text-decoration-none form-text text-muted">
              Forgot password?
            </a>
          </small>
          <MsgBox></MsgBox>
        </CenterForm>
      </body>
    </>
  );
};

export default Login;
