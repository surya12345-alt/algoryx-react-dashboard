import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 700 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 900 },
  { month: "May", users: 650 },
  { month: "Jun", users: 1000 },
];

function Chart() {
  return (
    <div className="bg-white mt-8 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        Monthly Users
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="users" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;