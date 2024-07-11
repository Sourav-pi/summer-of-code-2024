import logo from "../assets/images/logo.png";
import back from "../assets/images/back.png";
import search from "../assets/images/search.png";

interface Props {
  state?: boolean;
  imgURL?: string;
}

const NavBar = ({ state = false, imgURL = "" }: Props) => {
  if (!state) {
    return (
      <div className="navbar navbar-expand-lg bg-body-tertiary ps-2 pe-2">
        <img
          src={logo}
          className="navbar-brand"
          style={{ height: "60px" }}
          alt="company logo"
        />
        <div
          className="ms-auto w-25 "
          style={{
            display: "grid",
            gridTemplateColumns: "50px 1fr ",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imgURL}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "grey",
                borderRadius: "25px",
              }}
            ></img>
            {/* <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "red",
                borderRadius: "25px",
              }}
            ></div> */}
          </div>
          <button
            className="btn fs-3 col"
            style={{
              margin: "0px 5px",
              backgroundColor: " #FF7A28",
              color: "white",
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar navbar-expand-lg bg-body-tertiary ps-2 pe-2">
        <img
          src={logo}
          className="navbar-brand"
          style={{ height: "60px" }}
          alt="company logo"
        />
        <div
          className="ms-auto w-50"
          style={{
            display: "grid",
            gridTemplateColumns: "50px 1fr 60px ",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imgURL}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "grey",
                borderRadius: "25px",
              }}
            ></img>
          </div>
          <div className="input-group" style={{ padding: "0px 5px" }}>
            <div className="form-group form-floating">
              <input
                type={"text"}
                className="form-control"
                id="search"
                placeholder={"search"}
              />
              <label htmlFor="search">"search"</label>
            </div>
            <div
              className="input-group-text"
              onClick={() => {}}
              style={{
                padding: "0px",
                width: "50px",
                cursor: "pointer",
                backgroundColor: "rgb(255, 122, 40)",
                justifyContent: "center",
              }}
            >
              <img
                id="search"
                className="search"
                src={search}
                alt="search"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <button
            className="btn fs-3 col"
            style={{
              margin: "0px 5px",
              padding: "0px 0px",
              //   borderRadius: "20px",
              backgroundColor: " #FF7A28",
              color: "white",
              justifyContent: "center",
            }}
          >
            <img src={back} alt="" style={{ height: "50px" }} />
          </button>
        </div>
      </div>
    );
  }
};

export default NavBar;
