import PageContainer from "@/components/layout/page-container"
import Button from "@/components/shared/button"
import PageHeader from "@/components/shared/page-header"
import PageHeaderActions from "@/components/shared/page-header-actions"
import PageHeaderTitle from "@/components/shared/page-header-title"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import TerminalTable from "@/features/terminal/components/terminal-table"
import UploadTerminalsForm from "@/features/terminal/components/upload-terminals-form"
import { useFetchTerminals } from "@/features/terminal/hooks/use-fetch-terminals"
import { FaFileUpload } from "react-icons/fa"

export default function TerminalsPage() {
  const { terminals } = useFetchTerminals()
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
      <TerminalTable terminals={terminals} />
    </PageContainer>
  )
}
