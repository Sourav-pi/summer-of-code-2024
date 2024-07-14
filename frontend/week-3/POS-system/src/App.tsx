import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CashierDashboard from "./pages/CashierDashboard";
import BillingPage from "./pages/BillingPage";
import "bootstrap/dist/css/bootstrap.css";
import TestPage from "./pages/TestPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/cashier",
      element: <CashierDashboard />,
    },
    {
      path: "/billing",
      element: <BillingPage />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/test",
      element: <TestPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
