import { motion } from "framer-motion";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import DashboardCard from "./components/dashboardcard";
import OrdersTable from "./components/orderstable";
import Chart from "./components/chart";
import ProfileCard from "./components/profilecard";
import Notification from "./components/notification";

function App() {
  return (
    <div className="flex">

      <Sidebar />

      <motion.div
        className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <Navbar />

        <div className="mt-8">
          <DashboardCard />
        </div>

        <Chart />

        <OrdersTable />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ProfileCard />
          <Notification />
        </div>

      </motion.div>

    </div>
  );
}

export default App;