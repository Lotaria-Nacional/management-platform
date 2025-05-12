import TicketChart from "./ticket-chart";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

type Props = {
  name: string;
  total: number;
  subtotal: number;
};

function TicketStatistic({ name, total, subtotal }: Props) {
  const data = [
    {
      name: "Page A",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page B",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page C",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page D",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page E",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page F",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page G",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page H",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page I",
      pv: Math.floor(Math.random() * 1000),
      amt: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <section className="w-full flex justify-between">
      <div className="w-fit flex flex-col items-center gap-1 text-[14px]">
        <span>{name}</span>
        <span className="text-[34px]">{total}%</span>
        <div className="flex items-center gap-1">
          {subtotal > 0 ? (
            <>
              <FaArrowTrendUp className="text-GREEN" />
            </>
          ) : (
            <>
              <FaArrowTrendDown className="text-RED-700" />
              <span className="text-[14px]">{subtotal}%</span>
            </>
          )}
        </div>
      </div>
      <TicketChart data={data} />
    </section>
  );
}

export default TicketStatistic;
