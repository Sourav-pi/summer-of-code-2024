import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";
import AvailableItems from "../components/AvailableItems.tsx";
import OrderMenu from "../components/OrderMenu.tsx";
import "./BillingPage.css";

const BillingPage = () => {
  return (
    <div className="Billing-page-layout">
      <NavBar state={true} style={{ gridArea: "nav" }} />
      <CategoryCard style={{ gridArea: "categoryCard" }} />
      <AvailableItems
        style={{ gridArea: "availableItems", margin: "20px 0px" }}
      />
      <OrderMenu style={{ gridArea: "orderMenu" }} />
    </div>
  );
};

export default BillingPage;
