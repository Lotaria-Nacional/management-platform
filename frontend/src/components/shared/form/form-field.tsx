import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = {
  className?: string
} & PropsWithChildren

export default function FormField({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col w-full gap-[6px] md:gap-2",
        className
      )}
    >
      {children}
    </div>
  )
}
