import { FormEvent } from "react";
import { Button } from "../ui/button";
import Icon from "./icon";
import { toast } from "react-toastify";

type Props = {
  onSuccess: (value: boolean) => void;
  isSuccess: boolean;
};

export default function SuccessMessageBox({ isSuccess }: Props) {
  const handleClose = (e: FormEvent) => {
    e.preventDefault();
    // onSuccess(false);
    toast(<div className="size-[400px] bg-RED-600 p-6"></div>, {
      data: {},
      position: "top-center",
      className: "bg-RED-700 relative mt-[50vh]",
    });
  };
  return (
    <div
      className={`${
        isSuccess ? "flex" : "hidden"
      } fixed inset-0 z-50 bg-black/40 items-center justify-center`}
    >
      <div className="min-w-[321px] p-[32px] gap-8 h-[297px] bg-white rounded-[8px] shadow-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Icon name="success" className="size-[87px]" />
          <div className="flex flex-col items-center justify-center">
            <h2>Agent registrado</h2>
            <span>Quer continuar a registrar agentes</span>
          </div>
        </div>

        <form
          onSubmit={handleClose}
          className="flex items-center w-full justify-center"
        >
          <Button
            type="submit"
            variant={"ghost"}
            className="bg-GRAY-200 text-black"
          >
            Registar
          </Button>
          <Button type="submit" variant={"link"}>
            Cancelar
          </Button>
        </form>
      </div>
    </div>
  );
}
