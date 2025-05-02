import PosTable from "@/features/pos/components/pos-table"
import PageContainer from "@/components/layout/page-container"
import { useFetchPos } from "@/features/pos/hooks/use-fetch-pos"
import PageHeader from "@/components/shared/page-header"
import PageHeaderTitle from "@/components/shared/page-header-title"
import PageHeaderActions from "@/components/shared/page-header-actions"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import Button from "@/components/shared/button"
import { FaFileUpload } from "react-icons/fa"
import UploadPosForm from "@/features/pos/components/upload-pos-form"

export default function PosPage() {
  const { pos } = useFetchPos()
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
      <PosTable pos={pos} />
    </PageContainer>
  )
}
