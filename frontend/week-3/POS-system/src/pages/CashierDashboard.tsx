import NavBar from "../components/NavBar";
import CustomerForm from "../components/CustomerForm";
import CashierCard from "../components/CashierCard";
import EnteredDetails from "../components/EnteredDetails";
import "./CashierDashboard.css";

const CashierDashboard = () => {
  return (
    // <>
    //   <NavBar state={true} />
    //   <CashierCard></CashierCard>
    //   {/* <CustomerForm></CustomerForm> */}
    // </>
    <div className="layout">
      <NavBar state={false} style={{ gridArea: "nav" }} />
      <CashierCard style={{ gridArea: "cashierCard" }} />
      <CustomerForm
        style={{ gridArea: "customerForm", margin: "20px 0px" }}
        onSubmit={() => console.log("submitted")}
      />
      <EnteredDetails style={{ gridArea: "enteredDetails" }}></EnteredDetails>
    </div>
  );
};

export default CashierDashboard;
