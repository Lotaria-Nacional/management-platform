import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface FormWrapperProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  isSubmitting?: boolean
  submitLabel?: string
}

export default function FormWrapper({
  onSubmit,
  children,
  isSubmitting = false,
  submitLabel = "Salvar",
}: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <section className="w-full grid gap-6">{children}</section>
      <Button
        type="submit"
        variant={"red"}
        className="w-full !h-input"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Carregando..." : submitLabel}
      </Button>
    </form>
  )
}
