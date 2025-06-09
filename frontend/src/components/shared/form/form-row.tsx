import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren & {
  className?: string
}

export default function FormRow({ children, className }: Props) {
  return (
    <div className={cn("w-full flex items-center gap-3 md:gap-6", className)}>
      {children}
    </div>
  )
}
