import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 90 },
];
const COLORS = ["#D00018", "#951913", "#FFBB00", "#ED0D9B"];

function PrizesChart() {
  return (
    <ResponsiveContainer width={"100%"} height={180}>
      <PieChart width={300} height={180}>
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
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PrizesChart;
