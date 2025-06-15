import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import Loading from "./loading"
import { Button } from "../ui/button"
import Icon from "./icon"

type Props = {
  isPending: boolean
  removeFn: () => void
}

export default function RemoveDataDialog({ isPending, removeFn }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Icon name="trash" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tens a certeza que pretendes remover este terminal
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. O terminal será removido
            permanentemente da plataforma.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button className="bg-GRAY-300">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={removeFn}
            disabled={isPending}
            className="bg-RED-800"
          >
            {isPending ? <Loading /> : "Confirmar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
