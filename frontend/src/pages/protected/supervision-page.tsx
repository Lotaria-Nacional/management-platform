import { historyData } from "@/db/agents";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import InputSearch from "@/components/shared/search";
import PageHeader from "@/components/shared/page-header";
import PageContainer from "@/components/layout/page-container";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import AdminSupervisionTable from "@/features/supervision/components/admin-supervision-table";
import SupervisorSupervisionTable from "@/features/supervision/components/supervisor-supervision-table";

const user: "admin" | "supervisor" = "admin";

export default function SupervisionPage() {
  return (
    <PageContainer>
      <PageHeader>
        <div className="flex items-center gap-2">
          <PageHeaderTitle className="text-nowrap">Supervisão</PageHeaderTitle>
          <InputSearch />
        </div>
        <PageHeaderActions>
          <Button variant={"white"}>
            <Icon name="filtro" />
            Filtros
          </Button>
        </PageHeaderActions>
      </PageHeader>
      {user === "admin" ? (
        <AdminSupervisionTable data={historyData} />
      ) : (
        <SupervisorSupervisionTable data={historyData} />
      )}
    </PageContainer>
  );
}
