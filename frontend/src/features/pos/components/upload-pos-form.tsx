import { Input } from "@/components/ui/input"
import Button from "@/components/shared/button"
import { useUploadPos } from "../hooks/use-upload-pos"
import { ChangeEvent, FormEvent, useState } from "react"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"

export default function UploadPosForm() {
  const { upload, isLoading } = useUploadPos()
  const [file, setFile] = useState<File>()

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await upload(file as File)
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      setFile(file)
    }
  }

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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  )
}
