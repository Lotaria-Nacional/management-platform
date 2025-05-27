import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { useState } from "react";
import { PosEntity } from "../types";
import EditPosForm, { DataState } from "./edit-pos-form";
import Icon from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { POS_TABLE_HEADER } from "../constants/table";
import {
  AdministrationEntity,
  AreaEntity,
  CityEntity,
  LicenceEntity,
  ProvinceEntity,
  TypeEntity,
  ZoneEntity,
} from "@/app/types";
import { useRemovePos } from "../hooks/use-remove-pos";
import { toast } from "react-toastify";
import Loading from "@/components/shared/loading";

type PosTableProps = {
  pos: PosEntity[];
  provinces: DataState<ProvinceEntity>;
  cities: DataState<CityEntity>;
  areas: DataState<AreaEntity>;
  zones: DataState<ZoneEntity>;
  types: DataState<TypeEntity>;
  licences: DataState<LicenceEntity>;
  admins: DataState<AdministrationEntity>;
};
export default function PosTable({
  pos,
  provinces,
  cities,
  areas,
  zones,
  types,
  licences,
  admins,
}: PosTableProps) {
  const [isOpenEdit, setIsOpenEdit] = useState<number | null>(null);
  const [isOpenRemove, setIsOpenRemove] = useState<number | null>(null);

  const renderCell = (value: any) => value ?? "N/D";

  const handleOpenRemoveDropdown = (index: number) => {
    setIsOpenRemove((prev) => (prev === index ? null : index));
  };
  const handleOpenEditDropdown = (index: number) => {
    setIsOpenEdit((prev) => (prev === index ? null : index));
  };

  const { mutateAsync, isPending } = useRemovePos();

  const handleRemove = async (id: string) => {
    try {
      await mutateAsync(id);
      toast.success("Removido com sucesso");
    } catch (error) {
      toast.error("Erro ao remover, tente novamente mais tarde.");
      console.log("[Error trying to remove POS]: ", error);
    } finally {
      setIsOpenRemove(null);
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
          {pos &&
            pos.length > 0 &&
            pos.map((pos, idx) => (
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
                  {renderCell(pos.coordinates)}
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
                <TableCell className="h-full">
                  {renderCell(pos.agent.id.substring(1, 10))}
                </TableCell>
                <TableCell className="h-full">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      pos?.licence
                        ? "bg-GREEN-200 text-GREEN-600"
                        : "bg-RED-200 text-RED-600"
                    }`}
                  >
                    {pos.licence ? "POSSUI" : "NÃO POSSUI"}
                  </span>
                </TableCell>
                <TableCell className="relative !overflow-visible">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <Icon name="dots" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => handleOpenEditDropdown(idx)}
                      >
                        <Icon name="edit" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleOpenRemoveDropdown(idx)}
                      >
                        <Icon name="trash" />
                        <span>Remover</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {isOpenEdit === idx && (
                    <div
                      className="fixed inset-0 bg-black/20 flex items-center justify-center"
                      onClick={() => setIsOpenEdit(null)}
                    >
                      <div onClick={(e) => e.stopPropagation()}>
                        <EditPosForm
                          pos={pos}
                          provinces={provinces}
                          cities={cities}
                          areas={areas}
                          zones={zones}
                          types={types}
                          licences={licences}
                          admins={admins}
                        />
                      </div>
                    </div>
                  )}
                  {isOpenRemove === idx && (
                    <div
                      className="fixed inset-0 bg-black/20 flex items-center justify-center"
                      onClick={() => setIsOpenRemove(null)}
                    >
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-button flex flex-col gap-5 w-[450px] p-4"
                      >
                        <div className="w-fit flex flex-col gap-3">
                          <h2 className="text-black font-bold text-xl">
                            Remover POS
                          </h2>
                          <h4 className="text-wrap">
                            Tem certeza de que deseja remover este ponto de
                            venda? Essa ação é irreversível e todas as
                            informações associadas a este POS serão excluídas
                            permanentemente.
                          </h4>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                          <Button
                            onClick={() => setIsOpenRemove(null)}
                            variant={"secondary"}
                          >
                            Cancelar
                          </Button>
                          <Button
                            variant={"red"}
                            onClick={() => handleRemove(pos.id)}
                            disabled={isPending}
                          >
                            {isPending ? <Loading /> : <span>Confirmar</span>}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
