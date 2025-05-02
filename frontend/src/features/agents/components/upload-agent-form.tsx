import { Input } from "@/components/ui/input";
import Button from "@/components/shared/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useUploadAgents } from "../hooks/use-upload-agents";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function UploadAgentsForm() {
  const { mutateAsync, isPending } = useUploadAgents();
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
      <DialogTitle>Faça o upload do arquivo agents.csv</DialogTitle>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <Input
          onChange={handleFile}
          type="file"
          accept=".csv, .xlsx"
          placeholder="agents.xlsx"
        />
        <Button disabled={isPending} type="submit">
          {isPending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  );
}
