export interface TerminalEntity {
  _id: string
  id_terminal: string
  serial: string
  sim_card: string
}

export interface IAddTerminalRequestDTO extends Omit<TerminalEntity, "_id"> {}
export interface IEditTerminalRequestDTO extends Partial<TerminalEntity> {
  id: string
}
