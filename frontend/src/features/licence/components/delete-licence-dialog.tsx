import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type Props = {
  handleRemove: () => void;
};

export default function DeleteLicenceDialog({ handleRemove }: Props) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Tens a certeza que pretendes remover esta licença?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação não pode ser desfeita. A licença será removida
          permanentemente da plataforma.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <hr className="w-full h-1" />
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button className="bg-GRAY-300">Cancelar</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant={"red"} className="bg-RED-800" onClick={handleRemove}>
            Confirmar
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
