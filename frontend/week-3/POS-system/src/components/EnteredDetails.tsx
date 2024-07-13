import "./EnteredDetails.css";

interface Props {
  style?: React.CSSProperties;
  state?: boolean;
}

const EnteredDetails = ({ style = {}, state = false }: Props) => {
  const headStyle = {
    fontWeight: "normal",
    paddingBottom: "1rem",
    borderBottom: "2px solid #FF7A28",
    color: "#FF7A28",
    marginBottom: "2rem",
  };
  return (
    <div
      style={{
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 122, 40, 0.28)",
        borderRadius: "10px",
        margin: "20px 0px",
        marginRight: "20px",

        ...style,
      }}
    >
      {state ? (
        <>
          <div>
            <h3 style={headStyle}>DETAILS ENTERED </h3>
            <div className="brick">
              <p
                className="h5 fw-bold"
                style={{
                  color: "rgba(235, 92, 3, 1)",
                  alignSelf: "flex-start",
                }}
              >
                NAME
              </p>
              <div
                className="text-center text-white w-100"
                style={{
                  backgroundColor: "rgba(235, 92, 3, 1)",
                  height: "40px",
                  borderRadius: "15px",
                  display: "flex",
                }}
              >
                <p className="text-center m-auto fs-5">Item name</p>
              </div>
            </div>

            <div className="brick">
              <p
                className="h5 fw-bold"
                style={{
                  color: "rgba(235, 92, 3, 1)",
                  alignSelf: "flex-start",
                }}
              >
                MOBILE
              </p>
              <div
                className="text-center text-white w-100"
                style={{
                  backgroundColor: "rgba(235, 92, 3, 1)",
                  height: "40px",
                  borderRadius: "15px",
                  display: "flex",
                }}
              >
                <p className="text-center m-auto fs-5">94372345678</p>
              </div>
            </div>

            <div className="brick">
              <p
                className="h5 fw-bold"
                style={{
                  color: "rgba(235, 92, 3, 1)",
                  alignSelf: "flex-start",
                }}
              >
                ADDRESS
              </p>
              <div
                className="text-center text-white w-100"
                style={{
                  backgroundColor: "rgba(235, 92, 3, 1)",
                  height: "40px",
                  borderRadius: "15px",
                  display: "flex",
                }}
              >
                <p className="text-center m-auto fs-5">None</p>
              </div>
            </div>
          </div>
          <button
            className="btn submit-btn fs-5 w-100 mt-3"
            id="submit"
            style={{ justifySelf: "flex-end" }}
          >
            GO
          </button>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <p className="text-center  text-muted fs-5">
            Enter details to proceed to checkout
          </p>
        </div>
      )}
    </div>
  );
};

export default EnteredDetails;
