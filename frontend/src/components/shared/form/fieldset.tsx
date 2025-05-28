import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = {
  className?: string
} & PropsWithChildren

export default function Fieldset({ children, className }: Props) {
  return (
    <fieldset
      className={cn(
        "flex flex-col text-small leading-small md:text-body md:leading-body gap-[6px] md:gap-2",
        className
      )}
    >
      {children}
    </fieldset>
  )
}
