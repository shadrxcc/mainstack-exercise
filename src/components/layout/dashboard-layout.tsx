import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import Sidebar from "../ui/sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex px-4 mt-32">
        <Sidebar />
        <div className="mx-auto bg-white min-h-screen max-w-screen-2xl px-4 sm:px-8 pt-6 pb-14">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
