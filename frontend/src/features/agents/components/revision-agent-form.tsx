import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog"
import ItemInput from "./item-input"
import { toast } from "react-toastify"
import Icon from "@/components/shared/icon"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loading from "@/components/shared/loading"
import { Textarea } from "@/components/ui/textarea"
import { IMakeAgentRevisionRequestDTO } from "@/features/revision/types"
import { useMakeRevision } from "@/features/revision/hooks/use-make-revision"

type Props = {
  id: string
}

export default function RevisionAgentsForm({ id }: Props) {
  const { isPending, mutateAsync } = useMakeRevision()
  const [revision, setRevision] = useState<IMakeAgentRevisionRequestDTO>({
    additional_info: "",
    image: "",
    items: {
      guarda_sol: false,
      terminal: false,
      cavalete: false,
      mesa: false,
      marcador: false,
      internet: false,
    },
  } as IMakeAgentRevisionRequestDTO)

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await mutateAsync({
        ...revision,
        agent_id: id,
      })
      toast.success("Revisão feita com sucesso!")
    } catch (error) {
      toast.error("Erro ao fazer a revisão!")
      console.log(error)
    }
  }

  const handleItemChange = (
    item: keyof IMakeAgentRevisionRequestDTO["items"],
    value: boolean
  ) => {
    setRevision((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [item]: value,
      },
    }))
  }

  return (
    <DialogContent className="p-8 w-full max-w-[617px]">
      <DialogHeader className="flex-row items-center mt-4 justify-between w-full">
        <DialogTitle>Avaliação do agente</DialogTitle>
        <DialogDescription className="bg-YELLOW-500 px-2 py-px rounded-sm text-sm">
          ID_100039
        </DialogDescription>
      </DialogHeader>

      <hr className="w-full h-px" />

      <form onSubmit={handleOnSubmit} className="w-full grid gap-8 lg:gap-6">
        {/** 1ST INPUT FIELDS */}
        <fieldset className="w-full grid text-body leading-body gap-4">
          <ItemInput
            name="Guarda Sol"
            checked={revision.items.guarda_sol}
            onChange={({ target }) =>
              handleItemChange("guarda_sol", target.checked)
            }
          />
          <ItemInput
            name="Terminal"
            checked={revision.items.terminal}
            onChange={({ target }) =>
              handleItemChange("terminal", target.checked)
            }
          />
          <ItemInput
            name="Cavalete"
            checked={revision.items.cavalete}
            onChange={({ target }) =>
              handleItemChange("cavalete", target.checked)
            }
          />
          <ItemInput
            name="Mesa"
            checked={revision.items.mesa}
            onChange={({ target }) => handleItemChange("mesa", target.checked)}
          />
          <ItemInput
            name="Marcador"
            checked={revision.items.marcador}
            onChange={({ target }) =>
              handleItemChange("marcador", target.checked)
            }
          />
          <ItemInput
            name="Internet"
            checked={revision.items.internet}
            onChange={({ target }) =>
              handleItemChange("internet", target.checked)
            }
          />
        </fieldset>

        <Textarea
          placeholder="Informação adicional"
          value={revision.additional_info}
          onChange={(e) =>
            setRevision({ ...revision, additional_info: e.target.value ?? "" })
          }
          className="w-full p-4 h-[102px] !shadow-input rounded-[8px] border-none resize-none bg-white text-body leading-body"
        />

        <label
          htmlFor="file"
          className="w-full flex items-center cursor-pointer text-body leading-body hover:shadow-none hover:border-2 hover:border-RED-700 hover:border-dotted justify-center bg-white shadow-input h-[106px] rounded-[6px]"
        >
          <fieldset className="flex flex-col items-center justify-center w-full gap-3">
            <Icon name="gallery" className="size-7" />
            <span>
              Clique aqui para carregar uma
              <span className="text-RED-700">imagem</span>
            </span>
          </fieldset>
          <Input
            id="file"
            type="file"
            className="hidden"
            accept=".jpg, .png, .jpeg"
          />
        </label>

        <Button size={"lg"} variant={"red"} disabled={isPending} type="submit">
          {isPending ? <Loading /> : "Revisar agente"}
        </Button>
      </form>
    </DialogContent>
  )
}
