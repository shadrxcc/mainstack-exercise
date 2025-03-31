import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/dashboard-layout";
import Revenue from "../pages/revenue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard/revenue" />,
      },
      {
        path: "/dashboard/revenue",
        element: <Revenue />,
      },
    ],
  },
]);

export default router;
