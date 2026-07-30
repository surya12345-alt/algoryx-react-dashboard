import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaProjectDiagram,
} from "react-icons/fa";

import { motion } from "framer-motion";

function DashboardCard() {

  const cardStyle =
    "bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Users Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={cardStyle}
      >
        <FaUsers className="text-blue-600 text-3xl mb-3" />
        <h2 className="text-gray-500">Users</h2>
        <p className="text-3xl font-bold">1,250</p>
      </motion.div>

      {/* Revenue Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cardStyle}
      >
        <FaDollarSign className="text-green-600 text-3xl mb-3" />
        <h2 className="text-gray-500">Revenue</h2>
        <p className="text-3xl font-bold">$24,500</p>
      </motion.div>

      {/* Orders Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={cardStyle}
      >
        <FaShoppingCart className="text-orange-500 text-3xl mb-3" />
        <h2 className="text-gray-500">Orders</h2>
        <p className="text-3xl font-bold">530</p>
      </motion.div>

      {/* Projects Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={cardStyle}
      >
        <FaProjectDiagram className="text-purple-600 text-3xl mb-3" />
        <h2 className="text-gray-500">Projects</h2>
        <p className="text-3xl font-bold">45</p>
      </motion.div>

    </div>
  );
}

export default DashboardCard;