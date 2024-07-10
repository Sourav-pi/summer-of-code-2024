const MsgBox = () => {
  const onClose = () => {
    var msgbox = document.getElementById("MsgBox") as HTMLInputElement;
    msgbox.style.display = "none";
  };
  return (
    <div
      className="rounded-3 p-2 bg-light-subtle text-danger mt-2"
      id="MsgBox"
      style={{ display: "none" }}
    >
      <p id="msg" className="m-0 d-inline"></p>
      <button
        type="button"
        className="btn-close d-inline float-end"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default MsgBox;
