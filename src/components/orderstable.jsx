import orders from "../data/orders";

function OrdersTable() {
  return (
    <div className="bg-white mt-8 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Recent Orders
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-3">Customer</th>
            <th className="py-3">Order ID</th>
            <th className="py-3">Status</th>
            <th className="py-3">Amount</th>
            <th className="py-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td className="py-4">{order.customer}</td>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.amount}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;