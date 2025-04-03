import { Line, Tooltip, LineChart, ResponsiveContainer } from "recharts";

export type TicketChartProps = {
    name: string,
    pv: number,
    amt: number,
}[]

type Props = {
  data: TicketChartProps
} 

function TicketChart({ data }:Props) {
  
  const averagePv = data.reduce((sum, item) => sum + item.pv, 0) / data.length;
  const lineColorAverage = averagePv < 500 ? "#FF0000" : "#34C759"; 
  const selectedLineColor = lineColorAverage; 

  return (
<ResponsiveContainer width={"60%"} height={"50%"}>
      <LineChart layout="horizontal" data={data}>
        <Tooltip />
        <Line dataKey="pv" stroke={selectedLineColor} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TicketChart;
