import { FaFileUpload } from "react-icons/fa";
import Button from "@/components/shared/button";
import PageHeader from "@/components/shared/page-header";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import TerminalTable from "@/features/terminal/components/terminal-table";
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-terminals";
import UploadTerminalsForm from "@/features/terminal/components/upload-terminals-form";

export default function TerminalsPage() {
  const { data: terminals, isLoading } = useFetchTerminals();

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Terminais</PageHeaderTitle>
        <PageHeaderActions>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FaFileUpload />
                Upload
              </Button>
            </DialogTrigger>
            <UploadTerminalsForm />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <TerminalTable terminals={terminals} />
      )}
    </PageContainer>
  );
}
