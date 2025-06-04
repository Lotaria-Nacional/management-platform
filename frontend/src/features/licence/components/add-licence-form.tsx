import { useFetchAdministrations } from "@/app/hooks/use-fetch-administrations";
import EmptyDataState from "@/components/shared/empty-data-state";
import Fieldset from "@/components/shared/form/fieldset";
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper";
import Icon from "@/components/shared/icon";
import Loading from "@/components/shared/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { IAddLicenceDTO } from "./types";

type Props = {};

export default function AddLicenceForm({}: Props) {
  const { data: admins, isLoading } = useFetchAdministrations();
  const [data, setData] = useState<IAddLicenceDTO>({} as IAddLicenceDTO);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = async (e: FormEvent) => {
    try {
      console.log(data);

      toast.success("Adicionado com sucesso");
    } catch (error) {
      toast.success("Erro ao adicionar, tente novamente mais tarde");
    } finally {
    }
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const previeImage = URL.createObjectURL(file);
      setPreviewImage(previeImage);
      setData({ ...data, image: file });
    }
  };

  const handleClosePreviewImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(undefined);
      setData({ ...data, image: undefined });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FieldsetWrapper className="gap-6">
        <Fieldset>
          <Label>Referência</Label>
          <Input
            type="number"
            inputMode="numeric"
            placeholder="100053"
            value={data.reference_id}
            onChange={(e) =>
              setData({ ...data, reference_id: parseInt(e.target.value) })
            }
          />
        </Fieldset>
        {/** ########################## SECOND INPUT ########################## */}
        <Fieldset>
          <Label>Administração</Label>
          <Select
            onValueChange={(value) =>
              setData({ ...data, administration_id: value })
            }
          >
            <SelectTrigger className="!h-input w-full text-GRAY-400">
              <SelectValue placeholder="Selecione uma administração" />
            </SelectTrigger>
            <SelectContent className="h-[200px]">
              {isLoading ? (
                <Loading size={5} />
              ) : !admins || admins?.length <= 0 ? (
                <EmptyDataState />
              ) : (
                admins.map((admin) => (
                  <SelectItem key={admin.id} value={admin.id}>
                    {admin.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Fieldset>
      </FieldsetWrapper>
      {/** ########################## THIRD INPUT ########################## */}
      {previewImage && (
        <div className="w-full min-h-10 relative flex items-center justify-center">
          <Button
            size={"icon"}
            variant={"red"}
            onClick={handleClosePreviewImage}
            className="absolute right-24 -top-2"
          >
            <Icon name="fechar" />
          </Button>
          <img
            src={previewImage}
            alt="preview-image"
            className="size-56 object-cover"
          />
        </div>
      )}
      <Label
        htmlFor="image"
        className="w-full h-[102px] cursor-pointer border-2 border-GRAY-200 border-dashed rounded-button flex flex-col gap-4 items-center justify-center"
      >
        <Icon name="upload2" className="size-8" />

        <p className="text-GRAY-300 font-normal">
          Clique aqui para fazer o upload da licença
        </p>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="w-full h-full hidden"
        />
      </Label>
      <Button variant={"red"} className="w-full h-input">
        Adicionar licença
      </Button>
    </form>
  );
}
