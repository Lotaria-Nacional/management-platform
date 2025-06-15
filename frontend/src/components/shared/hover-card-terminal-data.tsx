import { AgentEntity } from "@/features/agents/types"

type Props = {
  data?: AgentEntity
}

export default function HoverCardTerminalData({ data }: Props) {
  return (
    <div className=" w-full text-sm grid grid-cols-1 gap-3">
      <h3 className="rounded-full px-2 w-fit">
        <span>Id: </span>
        <span>{data?.id_reference}</span>
      </h3>
      <div className="grid grid-cols-1 gap-3">
        <div className="rounded-full px-2 w-fit">
          <span>Nome: </span>
          <span>{data?.first_name}</span>
        </div>
        <div className="rounded-full px-2 w-fit">
          <span>Sobrenome: </span>
          <span>{data?.last_name}</span>
        </div>
        <div className="rounded-full px-2 w-fit">
          <span>Nº telefone: </span>
          <span>{data?.phone}</span>
        </div>
        <div className="rounded-full px-2 w-fit">
          <span>Nº afrimoney: </span>
          <span>{data?.afrimoney ?? "N/D"}</span>
        </div>
      </div>
    </div>
  )
}
