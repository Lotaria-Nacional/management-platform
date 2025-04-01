import { Line, Tooltip, LineChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    pv: 20,
    amt: 40,
  },
  {
    name: "Page B",
    pv: 4,
    amt: 10,
  },
  {
    name: "Page C",
    pv: 980,
    amt: 90,
  },
  {
    name: "Page D",
    pv: 40,
    amt: 29,
  },
  {
    name: "Page E",
    pv: 430,
    amt: 29,
  },
  {
    name: "Page F",
    pv: 30,
    amt: 29,
  },
  {
    name: "Page G",
    pv: 625,
    amt: 29,
  },
  {
    name: "Page H",
    pv: 40,
    amt: 29,
  },
  {
    name: "Page I",
    pv: 40,
    amt: 29,
  },
];

function TicketChart() {
  return (
    <ResponsiveContainer width={"60%"} height={"50%"}>
      <LineChart layout="horizontal" data={data}>
        <Tooltip />
        <Line dataKey="pv" stroke="#34C759" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TicketChart;
