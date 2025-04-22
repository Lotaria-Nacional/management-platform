import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 90 },
];
const COLORS = ["#D00018", "#b01816", "#951913", "#951913"];

function PrizesChart() {
  return (
    <ResponsiveContainer width={"100%"} height={170}>
      <PieChart width={120}>
        <Pie
          data={data}
          innerRadius={69}
          outerRadius={80}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell
              stroke="10"
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PrizesChart;
