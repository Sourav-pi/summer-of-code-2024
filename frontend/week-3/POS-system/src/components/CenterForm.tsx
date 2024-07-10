interface Props {
  logo?: boolean;
  logoPath?: string;
  contentAfterButton?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
  onSubmit: any;
}

const CenterForm = ({
  logo = false,
  logoPath = "./",
  children = null,
  title = "Form",
  contentAfterButton = null,
  onSubmit,
}: Props) => {
  return (
    <div className="container d-flex justify-content-center min-vh-100 align-items-center">
      <div className="row w-100">
        <div className="col"></div>
        <div
          className="col-xl-4 col-lg-5 col-md-7 col-10 shadow-lg rounded-4"
          id="glass"
          style={{
            boxShadow: "inset 0 0 2000px rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(3px)",
          }}
        >
          <form className="form-container w-100 p-3">
            {logo && (
              <div className="logo-container d-flex justify-content-center pb-4">
                <img
                  id="logo"
                  className="logo rounded-2"
                  style={{ height: "70px" }}
                  src={logoPath}
                  alt="logo"
                />
              </div>
            )}

            <h1 className="text-center fw-bold text-primary">{title}</h1>
            {children}
            <div className="d-flex justify-content-center pt-3">
              <button
                type="button"
                className="btn btn-primary align-self-center w-100"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
            {contentAfterButton}
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default CenterForm;
