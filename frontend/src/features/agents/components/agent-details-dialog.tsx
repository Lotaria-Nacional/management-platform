import { AgentEntity } from "../types"
import AgentPosMap from "./agent-pos-map"
import { renderCellData } from "@/app/utils/render-cell"

type Props = {
  agent: AgentEntity
}

export default function AgentDetailsDialog({ agent }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h2 className="font-semibold">{`${agent.first_name} ${agent.last_name}`}</h2>
      </header>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <span className="font-semibold">Sexo:</span>
          <span>{renderCellData(agent.genre)}</span>
        </li>
        <li className="flex gap-2">
          <span className="font-semibold">Nº do BI:</span>
          <span>{renderCellData(agent.bi_number)}</span>
        </li>

        <li className="flex gap-2 flex-col">
          <span className="font-semibold">Detalhes do terminal</span>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 border rounded-md px-3 py-2">
            <div className="flex flex-col gap-1">
              <h4>ID Ref:</h4>
              <p>{renderCellData(agent.terminal?.id_reference)}</p>
            </div>
            <div className="flex flex-col gap-1 border-x px-2">
              <h4>Nº de série:</h4>
              <p>{renderCellData(agent.terminal?.serial)}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4>Nº do SIM:</h4>
              <p>{renderCellData(agent.terminal?.sim_card)}</p>
            </div>
          </div>
        </li>

        <li className="flex gap-2 flex-col">
          <span className="font-semibold">Detalhes do POS</span>
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 border rounded-md px-3 py-2">
            <div className="flex flex-col gap-1">
              <p className="flex">
                <span className="font-semibold">Latitude: </span>
                {renderCellData(agent.pos?.latitude)}
              </p>
              <p className="flex">
                <span className="font-semibold">Longitude: </span>
                {renderCellData(agent.pos?.longitude)}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
