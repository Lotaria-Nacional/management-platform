import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Pos } from "../types";
import Icon from "@/components/shared/icon";

type Props = {
  pos: Pos[];
};

const TABLE_HEADER = [
  "ID",
  "Ref POS",
  "Admin",
  "Coordenadas",
  "Zona",
  "Área",
  "Tipo",
  "Província",
  "Cidade",
  "Licença",
];

export default function PosTable({ pos }: Props) {
  return (
    <div className="bg-white rounded-table w-full shadow-table">
      <Table>
        <TableHeader>
          <TableRow className="bg-GRAY-200/35 text-body leading-body font-medium w-full">
            {TABLE_HEADER.map((head, index) => (
              <TableHead
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
            pos.map((pos) => (
              <TableRow
                id={pos._id}
                className="h-table-cell text-body leading-body font-[400] text-black/50"
              >
                <TableCell className="h-full">{pos.props.id_pos}</TableCell>
                <TableCell className="h-full">
                  {pos.props.id_reference_pos}
                </TableCell>
                <TableCell className="h-full">{pos.props.admin}</TableCell>
                <TableCell className="h-full">
                  {pos.props.coordinates}
                </TableCell>
                <TableCell className="h-full">{pos.props.zone}</TableCell>
                <TableCell className="h-full">{pos.props.area}</TableCell>
                <TableCell className="h-full">{pos.props.type}</TableCell>
                <TableCell className="h-full">{pos.props.province}</TableCell>
                <TableCell className="h-full">{pos.props.city}</TableCell>
                <TableCell className="h-full">{pos.props.licence}</TableCell>
                <TableCell className="h-full">
                  <Icon name="dots" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
