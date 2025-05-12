import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import ItemInput from "./item-input";
import Icon from "@/components/shared/icon";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/shared/button";
import { VerifyAgentRequestDTO } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { useVerifyAgent } from "../hooks/use-verify-agent";

export default function VerifyAgentsForm() {
  const { isPending } = useVerifyAgent();
  const [_verifyAgent, _setverifyAgent] = useState<VerifyAgentRequestDTO>(
    {} as VerifyAgentRequestDTO
  );

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <DialogContent className="p-8 w-full max-w-[617px]">
      <DialogHeader className="flex-row items-center mt-4 justify-between w-full">
        <DialogTitle>Avaliação do agente</DialogTitle>
        <DialogDescription className="bg-YELLOW-500 px-2 py-px rounded-sm text-sm">
          ID_100039
        </DialogDescription>
      </DialogHeader>

      <hr className="w-full h-px" />

      <form onSubmit={handleOnSubmit} className="w-full grid gap-8 lg:gap-6">
        {/** 1ST INPUT FIELDS */}
        <fieldset className="w-full grid text-body leading-body gap-4">
          <ItemInput name="Item 1" />
          <ItemInput name="Item 2" />
          <ItemInput name="Item 3" />
        </fieldset>

        <Textarea
          className="w-full h-[102px] !shadow-input rounded-[8px] border-none resize-none bg-white text-body leading-body"
          placeholder="Informação adicional"
        />

        <label
          htmlFor="file"
          className="w-full flex items-center cursor-pointer text-body leading-body hover:shadow-none hover:border-2 hover:border-RED-700 hover:border-dotted justify-center bg-white shadow-input h-[106px] rounded-[6px]"
        >
          <fieldset className="flex flex-col items-center justify-center w-full gap-3">
            <Icon name="gallery" className="size-7" />
            <span>
              Clique aqui para carregar uma{" "}
              <span className="text-RED-700">imagem</span>
            </span>
          </fieldset>
          <Input
            id="file"
            type="file"
            className="hidden"
            accept=".jpg, .png, .jpeg"
          />
        </label>

        <Button
          disabled={isPending}
          type="submit"
          className="h-input w-full text-[16px] leading-[24px]"
        >
          {isPending ? "Carregando..." : "Avaliar agente"}
        </Button>
      </form>
    </DialogContent>
  );
}
