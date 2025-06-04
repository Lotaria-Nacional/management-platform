import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/page-header";
import PageContainer from "@/components/layout/page-container";
import PageHeaderTitle from "@/components/shared/page-header-title";
import PageHeaderActions from "@/components/shared/page-header-actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddLicenceForm from "@/features/licence/components/add-licence-form";

export default function LicencePage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Lincenças</PageHeaderTitle>
        <PageHeaderActions>
          <Button variant="white">
            <Icon name="filtro" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="red">
                <Icon name="adicionar_br" />
                Adiconar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Licença</DialogTitle>
                <DialogDescription>
                  Preencha os campos abaixo para adicionar uma licença
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full h-1" />
              <AddLicenceForm />
            </DialogContent>
          </Dialog>
        </PageHeaderActions>
      </PageHeader>

      <div className="rounded-t-table">
        <Table className="bg-white">
          <TableHeader className="bg-GRAY-200/40">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Estado atual</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>10043</TableCell>
              <TableCell>Luanda</TableCell>
              <TableCell>Em uso</TableCell>
              <TableCell>Entregue</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button size={"icon"} variant="ghost">
                  <Icon name="edit" />
                </Button>
                <Button size={"icon"} variant="ghost">
                  <Icon name="olhos" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </PageContainer>
  );
}
