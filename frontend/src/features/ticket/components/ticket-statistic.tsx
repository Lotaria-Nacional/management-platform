import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import TicketChart from "./ticket-chart";

type Props = {
  name: string;
  total: number;
  subtotal: number;
};

function TicketStatistic({ name, total, subtotal }: Props) {
  return (
    <section className="w-full flex justify-between">
      <div className="w-fit flex flex-col items-center gap-1 text-[14px]">
        <span>{name}</span>
        <span className="text-[34px]">{total}%</span>
        <div className="flex items-center gap-1">
          {subtotal > 0 ? (
            <>
              <FaArrowTrendUp className="text-GREEN" />
              <span className="text-[14px]">+{subtotal}%</span>
            </>
          ) : (
            <>
              <FaArrowTrendDown className="text-RED-200" />
              <span className="text-[14px]">{subtotal}%</span>
            </>
          )}
        </div>
      </div>
      <TicketChart />
    </section>
  );
}

export default TicketStatistic;
