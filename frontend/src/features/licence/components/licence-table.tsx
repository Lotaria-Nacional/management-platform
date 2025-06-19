import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { useState } from "react";
import { toast } from "react-toastify";
import { LicenceEntity } from "./types";
import Icon from "@/components/shared/icon";
import LicencePreview from "./licence-preview";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import EditLicenceForm from "./edit-licence-form";
import { formatDate } from "@/app/utils/format-date";
import DeleteLicenceDialog from "./delete-licence-dialog";
import { useRemoveLicence } from "../hooks/use-remove-licence";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { licence_table_header } from "../constants/licence-table";

type Props = {
  data?: LicenceEntity[];
};

const renderData = (data: string | number | undefined) => {
  return data ?? "N/D";
};

export default function LicenceTable({ data }: Props) {
  const { mutateAsync, isPending } = useRemoveLicence();
  const [index, setIndex] = useState<number | null>(null);

  const handleRemove = async (id: string, idx: number) => {
    console.log("Clicou");
    setIndex(idx);
    const response = await mutateAsync(id);
    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIndex(null);
  };

  const checkStatus = (status: boolean) =>
    status ? "bg-RED-200 text-RED-600" : "bg-GREEN-200 text-GREEN-600";

  return (
    <div className="rounded-t-table">
      <Table className="bg-white">
        <TableHeader className="bg-GRAY-200/40">
          <TableRow>
            {licence_table_header.map((head) => (
              <TableHead key={head.id}>{head.name}</TableHead>
            ))}
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((licence, idx) => (
            <TableRow key={licence.id}>
              <TableCell>{renderData(licence.admin?.name)}</TableCell>
              <TableCell>
                {renderData(`N${licence.licence_number}`.toUpperCase())}
              </TableCell>
              <TableCell>{formatDate(licence.creation_date)}</TableCell>
              <TableCell>
                {renderData(`PT${licence.description}`.toUpperCase())}
              </TableCell>

              <TableCell>
                <span
                  className={`${checkStatus(
                    licence.status
                  )} rounded-full px-3 py-1`}
                >
                  {licence.status ? "Em uso" : "Não usado"}
                </span>
              </TableCell>

              <TableCell>{renderData(licence.licence_reference)}</TableCell>

              <TableCell className="flex items-center gap-2">
                {/* EDIT LICENCE  */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"icon"} variant="ghost">
                      <Icon name="edit" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar licença</DialogTitle>
                      <DialogDescription>
                        Você pode corrigir ou atualizar os dados desta licença.
                      </DialogDescription>
                    </DialogHeader>
                    <EditLicenceForm data={licence} />
                  </DialogContent>
                </Dialog>

                {/* LICENCE PREVIEW */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button disabled size={"icon"} variant="ghost">
                      <Icon name="olhos" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <LicencePreview />
                  </DialogContent>
                </Dialog>
                {/* REMOVE LICENCE */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size={"icon"} variant="ghost" disabled={isPending}>
                      {isPending && index === idx ? (
                        <Loading size={4} color={COLORS.RED[600]} />
                      ) : (
                        <Icon name="trash" />
                      )}
                    </Button>
                  </AlertDialogTrigger>
                  <DeleteLicenceDialog
                    handleRemove={() => handleRemove(licence.id, idx)}
                  />
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
