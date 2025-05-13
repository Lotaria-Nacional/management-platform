import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUploadPos } from "../hooks/use-upload-pos";
import { ChangeEvent, FormEvent, useState } from "react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function RegisterPosForm() {
  const { mutateAsync, isPending } = useUploadPos();
  const [file, setFile] = useState<File>();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await mutateAsync({ file: file as File });
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return (
    <DialogContent>
      <DialogTitle>Faça o upload do arquivo pos.xlsx</DialogTitle>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <Input
          onChange={handleFile}
          type="file"
          accept=".csv, .xlsx"
          placeholder="pos.xlsx"
        />
        <Button variant={"red"} type="submit" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  );
}
