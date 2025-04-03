import PrizesCard from "@/features/prize/components/prizes-card";
import TicketCard from "@/features/ticket/components/ticket-card";
import SalesPointMap from "@/features/sales-point/components/sales-point-map";
import SaleChannelCard from "@/features/sale-channel/components/sale-channel-card";
import TerminalAndPosCard from "@/features/terminal-and-pos/components/terminal-and-pos-card";

function OverviewPage() {
  return (
    <div className="w-full h-full flex flex-col gap-[26px] p-container py-5">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[26px] lg:min-h-[330px] lg:grow-0 grow">
        <SaleChannelCard />
        <PrizesCard />
        <TicketCard />
      </section>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[26px] lg:min-h-[360px] lg:grow-0 grow">
        <TerminalAndPosCard />
        <SalesPointMap />
      </section>
    </div>
  );
}

export default OverviewPage;
