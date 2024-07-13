import { useState } from "react";
import "./CashierCard.css";
interface Props {
  style?: React.CSSProperties;
  profilePic?: string;
  name?: string;
  email?: string;
}

const CashierCard = ({
  style = {},
  name = "CASHIER NAME",
  email = "cashier@email.com",
  profilePic = "https://cdn-icons-png.flaticon.com/512/149/149071.png",
}: Props) => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      //   console.log(time);
    }, 1000);
  }
  return (
    <div
      className="outer-container h-100 bg-white border-1 border d-flex flex-column align-items-center"
      style={style}
    >
      <img
        src={profilePic}
        className="rounded-circle bg-body-secondary"
        style={{ height: "170px", width: "170px", margin: "80px 0px" }}
      ></img>
      <h1 className="text-center fw-normal mb-2">{name}</h1>
      <p>{email}</p>
      <p
        className="h1 mt-5 mb-5"
        style={{
          color: "white",
          backgroundColor: "#FF7A28",
          padding: "5px 30px",
          borderRadius: "50px",
        }}
      >
        CASHIER
      </p>
      <p id="time">{time}</p>
    </div>
  );
};

export default CashierCard;
