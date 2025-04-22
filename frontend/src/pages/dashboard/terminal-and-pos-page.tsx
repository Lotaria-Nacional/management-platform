import Icon from "@/components/shared/icon";
import Button from "@/components/shared/button";
import PageContainer from "@/components/layout/page-container";
import TerminalAndPOSTable from "@/features/terminal-and-pos/components/terminal-and-pos-table";
import UploadFileDialogForm from "@/features/terminal-and-pos/components/upload-file-dialog-form";

function TerminalAndPosPage() {
  return (
    <PageContainer>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-h1-lg font-medium">Terminal & POS</h1>
        <div className="flex items-center gap-4">
          <Button variant="white">
            <Icon name="refresh" />
          </Button>
          <UploadFileDialogForm />
        </div>
      </div>
      <TerminalAndPOSTable />
    </PageContainer>
  );
}

export default TerminalAndPosPage;
