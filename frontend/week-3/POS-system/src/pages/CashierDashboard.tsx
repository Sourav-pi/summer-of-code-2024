import NavBar from "../components/NavBar";
import CustomerForm from "../components/CustomerForm";
import CashierCard from "../components/CashierCard";
import EnteredDetails from "../components/EnteredDetails";
import "./CashierDashboard.css";
import { useState } from "react";

const CashierDashboard = () => {
  let [state, setState] = useState(false);
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");

  return (
    <div className="layout">
      <NavBar state={false} style={{ gridArea: "nav" }} />
      <CashierCard style={{ gridArea: "cashierCard" }} />
      <CustomerForm
        style={{ gridArea: "customerForm", margin: "20px 0px" }}
        onSubmit={(values: any) => {
          setState(true);
          setName(values.name);
          setMobile(values.phone);
          setAddress(values.address);
        }}
      />
      <EnteredDetails
        style={{ gridArea: "enteredDetails" }}
        state={state}
        name={name}
        mobile={mobile}
        address={address}
      ></EnteredDetails>
    </div>
  );
};

export default CashierDashboard;
