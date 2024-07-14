import clipboard from "../assets/images/clipboard.svg";
import threedot from "../assets/images/threedot.svg";
import edit from "../assets/images/edit.svg";
import save from "../assets/images/save.svg";
import OrderMenuItem from "./OrderMenuItem";
import "./OrderMenu.css";

interface Props {
  style?: React.CSSProperties;
}

const OrderMenu = ({ style = {} }: Props) => {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...style,
        }}
      >
        <div
          className="w-100"
          style={{
            borderBottom: "1px solid rgba(139, 139, 139, 1)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            className="head-container pt-0"
            style={{
              paddingBottom: "10px",
            }}
          >
            <img
              src={clipboard}
              style={{
                backgroundColor: "rgba(255, 122, 40, 1)",
                borderRadius: "15px",
                height: "50px",
                padding: "5px",
                marginRight: "10px",
              }}
              alt=""
            />
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "rgba(12, 8, 92, 1)",
                }}
              >
                {sessionStorage.getItem("customerName")}
              </p>
              <p className="text-muted">Order Menu</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={edit} style={{ height: "30px" }} alt="" />
            <img src={threedot} style={{ height: "30px" }} alt="" />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            marginBottom: "10px",
            borderBottom: "1px solid rgba(139, 139, 139, 1)",
            padding: "10px 0px",
          }}
        >
          <OrderMenuItem />
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 122, 40, 1)",
            borderRadius: "20px",
            padding: "20px 20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "15px 0px",
          }}
        >
          <div style={{ color: "white" }}>
            <p style={{ opacity: 0.5, marginBottom: "5px" }}>X items</p>
            <p style={{ fontSize: "20px" }}>₹ X</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              className="btn bg-white white-btn"
              style={{ height: "45px" }}
            >
              <img src={save} alt="" />
            </button>
            <button
              className="btn bg-white white-btn"
              style={{
                color: "rgba(255, 122, 40, 1)",
                fontWeight: "bold",
                height: "45px",
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderMenu;
