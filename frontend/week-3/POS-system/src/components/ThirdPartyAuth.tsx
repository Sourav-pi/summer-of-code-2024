import google from "../assets/images/google.svg";
import github from "../assets/images/github.svg";
import facebook from "../assets/images/facebook.svg";

const ThirdPartyAuth = () => {
  return (
    <div className=" d-sm-flex d-block justify-content-center ali ">
      <a className="btn mx-1 w-100 btn-light shadow-sm mt-1 mb-1" href="#">
        <img
          src={google}
          className="icon-link mb-1"
          style={{ height: "25px" }}
          alt=""
        />
      </a>
      <a className="btn mx-1 w-100  btn-light shadow-sm mt-1 mb-1" href="#">
        <img
          src={github}
          className="icon-link mb-1"
          style={{ height: "25px" }}
          alt=""
        />
      </a>
      <a className="btn mx-1 w-100  btn-light shadow-sm mt-1 mb-1" href="#">
        <img
          src={facebook}
          className="icon-link mb-1"
          style={{ height: "25px" }}
          alt=""
        />
      </a>
    </div>
  );
};

export default ThirdPartyAuth;
