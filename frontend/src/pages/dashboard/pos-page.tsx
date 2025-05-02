import { FaFileUpload } from "react-icons/fa";
import Button from "@/components/shared/button";
import PageHeader from "@/components/shared/page-header";
import PosTable from "@/features/pos/components/pos-table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PageContainer from "@/components/layout/page-container";
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos";
import PageHeaderTitle from "@/components/shared/page-header-title";
import UploadPosForm from "@/features/pos/components/upload-pos-form";
import PageHeaderActions from "@/components/shared/page-header-actions";

export default function PosPage() {
  const { data: pos, isLoading } = useFetchPos();

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>POS</PageHeaderTitle>
        <PageHeaderActions>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FaFileUpload />
                Upload
              </Button>
            </DialogTrigger>
            <UploadPosForm />
          </Dialog>
        </PageHeaderActions>
      </PageHeader>
      {isLoading ? <span>Carregando...</span> : <PosTable pos={pos} />}
    </PageContainer>
  );
}
