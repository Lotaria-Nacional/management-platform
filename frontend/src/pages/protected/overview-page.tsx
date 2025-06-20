import PosMap from "@/features/pos/components/pos-map";
import PageContainer from "@/components/layout/page-container";
import PrizesCard from "@/features/prize/components/prizes-card";
import TicketCard from "@/features/ticket/components/ticket-card";
import TerminalCard from "@/features/terminal/components/terminal-card";
import SaleChannelCard from "@/features/sale-channel/components/sale-channel-card";

function OverviewPage() {
  return (
    <PageContainer>
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[26px] lg:min-h-[330px] grow">
        <SaleChannelCard />
        <PrizesCard />
        <TicketCard />
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[26px] lg:min-h-[360px] grow">
        <TerminalCard />
        <PosMap />
      </section>
    </PageContainer>
  );
}

export default OverviewPage;
