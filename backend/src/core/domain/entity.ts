import { randomUUID } from "node:crypto"

export abstract class Entity<Props> {
  protected _id: string
  protected _props: Props

  constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID()
    this._props = props
  }

  get id(): string {
    return this._id
  }

  get props() {
    return this._props
  }

  toJSON() {
    return {
      id: this._id,
      ...this._props,
    }
  }

  equals(entity: Entity<any>): boolean {
    if (entity === this) return true
    if (!entity === !(entity instanceof Entity)) return false
    return entity.id === this._id
  }
}
