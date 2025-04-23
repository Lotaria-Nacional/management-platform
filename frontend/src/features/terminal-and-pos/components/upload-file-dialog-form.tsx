import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/components/shared/button";

export default function UploadFileDialogForm() {
  const [file, setFile] = useState<File>();

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

  const handleUploadFile = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) return;

    const apiRoute = "http://localhost:8080/file/upload";

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(apiRoute, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta do servidor:", response.data);
      const blob = new Blob([JSON.stringify(response.data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sales_&_reconciliation.json";
      a.click();
      URL.revokeObjectURL(url);

      alert("Arquivo salvo com sucesso.");
    } catch (error) {
      console.error("Erro: ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload CSV</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Carregar Arquivo</DialogTitle>
        <form onSubmit={handleUploadFile} className="w-full p-4 space-y-4">
          <Input
            type="file"
            name="file"
            accept=".xlsx, .csv"
            onChange={handleChangeFile}
            className="cursor-pointer"
          />
          <Button type="submit">Carregar ficheiro</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
