import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select"
import { Label } from "recharts"
import { Input } from "@/components/ui/input"
import { Form } from "@/components/shared/form"
import { Button } from "@/components/ui/button"

type Props = {}

export default function TerminalFilter({}: Props) {
  return (
    <form className="flex flex-col gap-6 w-full">
      <Form.Row className="border-b pb-5">
        <Form.Field>
          <Input type="date" />
        </Form.Field>
        <Form.Field>
          <Input type="date" />
        </Form.Field>
      </Form.Row>

      <Form.Row className="border-b pb-5">
        <Form.Field>
          <Select>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Província" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Form.Field>
        <Form.Field>
          <Select>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Cidade" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Form.Field>
        <Form.Field>
          <Select>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Área" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Form.Field>
        <Form.Field>
          <Select>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Zona" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Form.Field>
      </Form.Row>
      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Filtrar por tipo</Label>
          <Select>
            <SelectTrigger className="w-full !h-input col-span-2">
              <SelectValue placeholder="Selecionar tipo" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Form.Field>
      </Form.Row>
      <div className="grid grid-cols-2 gap-4">
        <Button type="button" variant="secondary" className="border">
          Limpar tudo
        </Button>
        <Button type="button" variant="red">
          Aplicar filtro
        </Button>
      </div>
    </form>
  )
}
