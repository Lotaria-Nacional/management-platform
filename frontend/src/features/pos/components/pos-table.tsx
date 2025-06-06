import { toast } from "react-toastify";
import { useState } from "react";
import { PosEntity } from "../types";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import EditPosForm, { DataState } from "./edit-pos-form";
import { POS_TABLE_HEADER } from "../constants/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import {
  AdministrationEntity,
  AreaEntity,
  CityEntity,
  ProvinceEntity,
  TypeEntity,
  ZoneEntity,
} from "@/app/types";

import { useRemovePos } from "../hooks/use-remove-pos";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LicenceEntity } from "@/features/licence/components/types";

type PosTableProps = {
  pos?: PosEntity[];
  provinces: DataState<ProvinceEntity>;
  cities: DataState<CityEntity>;
  areas: DataState<AreaEntity>;
  zones: DataState<ZoneEntity>;
  types: DataState<TypeEntity>;
  licences: DataState<LicenceEntity>;
  admins: DataState<AdministrationEntity>;
};

const renderCell = (value: any) => {
  return value ?? "N/D";
};

export default function PosTable(props: PosTableProps) {
  const { pos, admins, areas, cities, licences, provinces, types, zones } =
    props;

  const [index, setIndex] = useState<number | null>(null);

  const { mutateAsync, isPending } = useRemovePos();

  const handleRemove = async (id: string, idx: number) => {
    setIndex(idx);
    try {
      await mutateAsync(id);
      toast.success("Removido com sucesso");
    } catch (error) {
      toast.error("Erro ao remover, tente novamente mais tarde.");
      console.log("[Error trying to remove POS]: ", error);
    } finally {
      setIndex(null);
    }
  };

  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            {POS_TABLE_HEADER.map((head, index) => (
              <TableHead
                key={index}
                className={`h-table-cell w-table-cell ${
                  index === 0 && "rounded-tl-table"
                }`}
              >
                {head}
              </TableHead>
            ))}

            <TableHead className="h-full w-table-cell rounded-tr-table">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pos?.map((pos, idx) => (
            <TableRow
              key={pos.id}
              className="h-table-cell text-body leading-body font-[400] text-black/50"
            >
              <TableCell className="h-full">
                {renderCell(pos.id_reference)}
              </TableCell>
              <TableCell className="h-full">
                {renderCell(pos.administration?.name)}
              </TableCell>
              <TableCell className="h-full">
                {renderCell(pos.coordinates[0] + "," + pos.coordinates[1])}
              </TableCell>
              <TableCell className="h-full">
                Zona {renderCell(pos.zone.zone_number)}
              </TableCell>
              <TableCell className="h-full">
                Área {renderCell(pos.area.name)}
              </TableCell>
              <TableCell className="h-full">
                {renderCell(pos.type.name)}
              </TableCell>
              <TableCell className="h-full">
                {renderCell(pos.province.name)}
              </TableCell>
              <HoverCard>
                <HoverCardTrigger asChild className="cursor-pointer">
                  <TableCell className="h-full">
                    {renderCell(
                      pos.agent.agent_id
                        ? pos.agent.agent_id
                        : pos.agent.agent_id
                    )}
                  </TableCell>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className=" w-full text-sm grid grid-cols-1 gap-3">
                    <h3 className="rounded-full px-2 w-fit">
                      <span>Id: </span>
                      <span>{pos.agent.agent_id}</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="rounded-full px-2 w-fit">
                        <span>Nome: </span>
                        <span>{pos.agent.first_name}</span>
                      </div>
                      <div className="rounded-full px-2 w-fit">
                        <span>Sobrenome: </span>
                        <span>{pos.agent.last_name}</span>
                      </div>
                      <div className="rounded-full px-2 w-fit">
                        <span>Nº telefone: </span>
                        <span>{pos.agent.phone}</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <TableCell className="h-full">
                {pos.licence ? pos.licence.reference_id : "N/D"}
              </TableCell>
              <TableCell className="flex items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"icon"} variant="ghost">
                      <Icon name="edit" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <EditPosForm
                      pos={pos}
                      types={types}
                      zones={zones}
                      areas={areas}
                      admins={admins}
                      cities={cities}
                      licences={licences}
                      provinces={provinces}
                    />
                  </DialogContent>
                </Dialog>
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
                      <AlertDialogTitle>Remover POS</AlertDialogTitle>
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
                          onClick={() => handleRemove(pos.id, idx)}
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
