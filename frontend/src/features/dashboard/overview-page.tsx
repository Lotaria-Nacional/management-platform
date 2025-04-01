import PrizesCard from "../prize/components/prizes-card";
import TicketCard from "../ticket/components/ticket-card";
import SalesPointMap from "../sales-point/components/sales-point-map";
import SaleChannelCard from "../sale-channel/components/sale-channel-card";
import TerminalAndPosCard from "../terminal-and-pos-card/components/terminal-and-pos-card";

function OverviewPage() {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-container py-5">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[26px] lg:min-h-[330px] lg:grow-0 grow">
        <SaleChannelCard />
        <PrizesCard />
        <TicketCard />
      </section>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[26px] lg:min-h-[320px] lg:grow-0 grow">
        <TerminalAndPosCard />
        <SalesPointMap />
      </section>
      <section className="h-[300vh] bg-orange-400"></section>
      <section className="h-[300vh] bg-amber-900"></section>
    </div>
  );
}

export default OverviewPage;
