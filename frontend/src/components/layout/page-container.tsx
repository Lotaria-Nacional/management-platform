import { twMerge } from "tailwind-merge"
import { PropsWithChildren } from "react"

type Props = { className?: string } & PropsWithChildren

export default function PageContainer({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "w-full h-full flex flex-col gap-[26px] p-container py-5",
        className
      )}
    >
      {children}
    </div>
  )
}
