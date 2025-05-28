import { PropsWithChildren } from "react"

type Props = PropsWithChildren

export default function FieldsetWrapper({ children }: Props) {
  return <div className="w-full grid grid-cols-2 gap-2">{children}</div>
}
