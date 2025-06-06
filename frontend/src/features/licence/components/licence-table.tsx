import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { LicenceEntity } from "./types";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import EditLicenceForm from "./edit-licence-form";
import { useRemoveLicence } from "../hooks/use-remove-licence";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    try {
      setIndex(idx);
      await mutateAsync(id);
      toast.success("Licença removida com sucesso");
    } catch (error) {
      toast.error("Erro ao remover a licença");
    } finally {
      setIndex(null);
    }
  };

  return (
    <div className="rounded-t-table">
      <Table className="bg-white">
        <TableHeader className="bg-GRAY-200/40">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Administração</TableHead>
            <TableHead>Refência</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((licence, idx) => (
            <TableRow key={licence.id}>
              <TableCell>{licence.reference_id}</TableCell>

              <TableCell>{renderData(licence.admin?.name)}</TableCell>
              <TableCell>MAIANGA-N9-2025-PT27</TableCell>

              <TableCell>
                <span
                  className={`${
                    licence.status
                      ? "bg-RED-200 text-RED-600"
                      : "bg-GREEN-200 text-GREEN-600"
                  } rounded-full px-3 py-1`}
                >
                  {licence.status ? "EM USO" : "NÃO USADO"}
                </span>
              </TableCell>

              <TableCell className="flex items-center gap-2">
                {/* EDIT LICENCE  */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"icon"} variant="ghost">
                      <Icon name="edit" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <EditLicenceForm data={licence} />
                  </DialogContent>
                </Dialog>
                {/* LICENCE PREVIEW */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"icon"} variant="ghost">
                      <Icon name="olhos" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <span className="text-xs">
                      ATT: isto é apenas um exemplo.
                    </span>
                    <div className="relative flex items-center justify-center h-[350px] w-full">
                      <img
                        alt="preview da lincença"
                        src="/licence-example.jpeg"
                        className="absolute w-full h-full object-cover"
                      />
                    </div>
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
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Editar </AlertDialogTitle>
                      <AlertDialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, pariatur.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <hr className="w-full h-1" />
                    <AlertDialogFooter>
                      <AlertDialogCancel asChild>
                        <Button className="bg-GRAY-300">Cancelar</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button
                          variant={"red"}
                          className="bg-RED-800"
                          onClick={() => handleRemove(licence.id, idx)}
                        >
                          Confirmar
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
