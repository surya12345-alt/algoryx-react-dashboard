import {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaProjectDiagram,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-xl">
      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        Algoryx
      </h1>

      <nav>
        <ul className="space-y-4">

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-blue-400 transition-all duration-300">
            <FaTachometerAlt />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-blue-400 transition-all duration-300">
            <FaUsers />
            Users
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-blue-400 transition-all duration-300">
            <FaShoppingCart />
            Orders
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-blue-400 transition-all duration-300">
            <FaProjectDiagram />
            Projects
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:text-blue-400 transition-all duration-300">
            <FaCog />
            Settings
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;