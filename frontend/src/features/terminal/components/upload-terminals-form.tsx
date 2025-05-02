import { Input } from "@/components/ui/input";
import Button from "@/components/shared/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useUploadTerminals } from "../hooks/use-upload-terminals";

export default function UploadTerminalsForm() {
  const { mutateAsync, isPending } = useUploadTerminals();
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
      <DialogTitle>Faça o upload do arquivo terminais.xlsx</DialogTitle>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <Input
          onChange={handleFile}
          type="file"
          accept=".csv, .xlsx"
          placeholder="terminais.xlsx"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  );
}
