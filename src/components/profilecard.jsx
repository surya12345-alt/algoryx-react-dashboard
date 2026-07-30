import { FaUserCircle } from "react-icons/fa";

function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">

      <div className="flex justify-center">
        <FaUserCircle className="text-7xl text-blue-600" />
      </div>

      <h2 className="text-2xl font-bold text-center mt-4">
        Surya
      </h2>

      <p className="text-center text-gray-500">
        Frontend Developer Intern
      </p>

      <div className="mt-6 space-y-2">
        <p><strong>Email:</strong> surya@example.com</p>
        <p><strong>Location:</strong> India</p>
        <p><strong>Experience:</strong> Fresher</p>
      </div>

    </div>
  );
}

export default ProfileCard;