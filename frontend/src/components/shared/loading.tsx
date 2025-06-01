import { cn } from "@/lib/utils"
import { SyncLoader } from "react-spinners"

type Props = {
  className?: string
  color?: string
  showText?: boolean
  size?: number
}

export default function Loading({
  className,
  showText = false,
  color = "#FFFF",
  size = 8,
}: Props) {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center w-full h-full">
      <SyncLoader size={size} color={color} className={cn("", className)} />
      {showText && <span>Carregando...</span>}
    </div>
  )
}
