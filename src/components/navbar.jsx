import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
   <div className="flex items-center justify-between bg-white shadow-lg rounded-xl p-5 sticky top-0 z-10">

      {/* Left Side */}
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        {/* Notification */}
        <FaBell className="text-xl cursor-pointer" />

        {/* User */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-blue-600" />
          <span className="font-medium">Surya</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;