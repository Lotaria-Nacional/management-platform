import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren & {
  className?: string
}

export default function FormRow({ children, className }: Props) {
  return (
    <div className={cn("w-full grid grid-cols-2 gap-2 md:gap-6", className)}>
      {children}
    </div>
  )
}
