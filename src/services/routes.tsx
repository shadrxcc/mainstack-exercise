import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/dashboard-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
        { path: "", element: "Revenue" },
    ],
  },
]);

export default router;