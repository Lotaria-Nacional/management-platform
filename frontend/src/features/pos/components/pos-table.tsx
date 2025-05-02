import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Pos } from "../types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { posItems } from "../faker/pos-items-fake";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/shared/icon";
import { ChangeEvent, useState } from "react";
import Button from "@/components/shared/button";

type Props = {
  pos: Pos[];
};

export default function PosTable({ pos }: Props) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const image = files[0];
      const previewImageUrl = URL.createObjectURL(image);
      setPreviewImage(previewImageUrl);
    }
  };

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
            <Dialog key={pos._id}>
              <DialogTrigger asChild>
                <TableRow>
                  <TableCell className="text-center">
                    {pos.props.id_pos}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.id_reference_pos || "ND"}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.admin || "ND"}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.coordinates}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.zone}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.area}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.type}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.province}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.city || "N/D"}
                  </TableCell>
                  <TableCell className="text-center">
                    {pos.props.licence}
                  </TableCell>
                </TableRow>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="flex-row justify-between mt-4">
                  <DialogTitle className="text-sm">Avaliação POS</DialogTitle>
                  <DialogDescription className="bg-YELLOW px-[6px] py-[2px] rounded-[6px] text-black">
                    942hf92oifnoq
                  </DialogDescription>
                </DialogHeader>
                <form action="" className="space-y-4">
                  {posItems.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={item.name}
                      className="flex items-center gap-2 w-full border rounded-[8px] justify-between p-2"
                    >
                      <span>{item.name}</span>
                      <Input
                        id={item.name}
                        type="checkbox"
                        className="size-[12px] accent-RED-100"
                      />
                    </label>
                  ))}
                  <Textarea
                    rows={14}
                    placeholder="Informação adicional"
                    className="resize-none min-h-24"
                  ></Textarea>
                  {previewImage && (
                    <div className="w-full">
                      <img
                        src={previewImage}
                        alt="Imagem de pré-visualização"
                        className="size-36 object-cover aspect-square"
                      />
                    </div>
                  )}
                  <label
                    htmlFor="file-upload"
                    className="w-full min-h-[70px] md:min-h-[100px] bg-white flex flex-col items-center justify-center border rounded-lg p-4 gap-2 cursor-pointer"
                  >
                    <Icon name="upload" />
                    <span className="text-sm text-GRAY-200">
                      Clique aqui para carregar uma{" "}
                      <span className="text-RED-200">imagem</span>
                    </span>
                    <Input
                      onChange={handleSelectImage}
                      type="file"
                      id="file-upload"
                      accept=".png, .jpg, .jpeg, .webp"
                      className="hidden"
                    />
                  </label>
                  <Button className="w-full rounded-lg">Enviar</Button>
                </form>
              </DialogContent>
            </Dialog>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
