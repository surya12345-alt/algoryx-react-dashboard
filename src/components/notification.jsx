function Notification() {

  const notifications = [
    "New user registered",
    "5 new orders received",
    "Revenue increased today",
    "Project updated successfully",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Notifications
      </h2>

      <ul className="space-y-3">

        {notifications.map((item, index) => (
          <li
            key={index}
            className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-all duration-300"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Notification;