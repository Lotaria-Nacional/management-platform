import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Pos } from "../types"

type Props = {
  pos: Pos[]
}

export default function PosTable({ pos }: Props) {
  return (
    <div className="bg-white rounded-card p-4 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">ID Reference POS</TableHead>
            <TableHead className="text-center">Admin</TableHead>
            <TableHead className="text-center">Coordenadas</TableHead>
            <TableHead className="text-center">Zona</TableHead>
            <TableHead className="text-center">Área</TableHead>
            <TableHead className="text-center">Tipo</TableHead>
            <TableHead className="text-center">Províncna</TableHead>
            <TableHead className="text-center">Cidade</TableHead>
            <TableHead className="text-center">Licença</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pos.map((pos) => (
            <TableRow id={pos._id}>
              <TableCell className="text-center">{pos.props.id_pos}</TableCell>
              <TableCell className="text-center">
                {pos.props.id_reference_pos || "ND"}
              </TableCell>
              <TableCell className="text-center">
                {pos.props.admin || "ND"}
              </TableCell>
              <TableCell className="text-center">
                {pos.props.coordinates}
              </TableCell>
              <TableCell className="text-center">{pos.props.zone}</TableCell>
              <TableCell className="text-center">{pos.props.area}</TableCell>
              <TableCell className="text-center">{pos.props.type}</TableCell>
              <TableCell className="text-center">
                {pos.props.province}
              </TableCell>
              <TableCell className="text-center">
                {pos.props.city || "N/D"}
              </TableCell>
              <TableCell className="text-center">{pos.props.licence}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
