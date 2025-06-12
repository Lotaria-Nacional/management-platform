import {
  DataState,
  AreaEntity,
  CityEntity,
  TypeEntity,
  ZoneEntity,
  ProvinceEntity,
  AdministrationEntity,
} from "@/app/types";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { PosEntity } from "../types";
import { toast } from "react-toastify";
import EditPosForm from "./edit-pos-form";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { POS_TABLE_HEADER } from "../constants/table";
import { useRemovePos } from "../hooks/use-remove-pos";
import { LicenceEntity } from "@/features/licence/components/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AgentEntity } from "@/features/agents/types";

type PosTableProps = {
  pos?: PosEntity[];
  types: DataState<TypeEntity>;
  areas: DataState<AreaEntity>;
  zones: DataState<ZoneEntity>;
  cities: DataState<CityEntity>;
  licences: DataState<LicenceEntity>;
  provinces: DataState<ProvinceEntity>;
  admins: DataState<AdministrationEntity>;
  agents?: DataState<AgentEntity>;
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
    const response = await mutateAsync(id);

    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIndex(null);
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
                {renderCell(pos.latitude)}
              </TableCell>
              <TableCell className="h-full">
                {renderCell(pos.longitude)}
              </TableCell>
              <TableCell className="h-full">
                Zona {renderCell(pos.zone.value)}
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
                    {renderCell(pos.agent?.id_reference)}
                  </TableCell>
                </HoverCardTrigger>
                <HoverCardContent>
                  {pos.agent ? (
                    <div className=" w-full text-sm grid grid-cols-1 gap-3">
                      <h3 className="rounded-full px-2 w-fit">
                        <span>Id: </span>
                        <span>{pos.agent?.id_reference}</span>
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-full px-2 w-fit">
                          <span>Nome: </span>
                          <span>{pos.agent?.first_name}</span>
                        </div>
                        <div className="rounded-full px-2 w-fit">
                          <span>Sobrenome: </span>
                          <span>{pos.agent?.last_name}</span>
                        </div>
                        <div className="rounded-full px-2 w-fit">
                          <span>Nº telefone: </span>
                          <span>{pos.agent?.phone}</span>
                        </div>
                        <div className="rounded-full px-2 w-fit">
                          <span>Nº afrimoney: </span>
                          <span>{pos.agent?.afrimoney ?? "N/D"}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span>Não há nenhum agente.</span>
                  )}
                </HoverCardContent>
              </HoverCard>
              <TableCell className="h-full">
                {renderCell(pos.licence?.licence_reference)}
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
