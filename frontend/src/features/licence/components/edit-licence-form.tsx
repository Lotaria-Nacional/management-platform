import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EditLicenceDTO,
  editLicenceSchema,
} from "../validations/edit-licence-schema";
import { useState } from "react";
import { LicenceEntity } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/shared/form";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataIsNotValid } from "@/app/utils/check-data";
import { useEditLicence } from "../hooks/use-edit-licence";
import PreviewImage from "@/components/shared/preview-image";
import EmptyDataState from "@/components/shared/empty-data-state";
import { useFetchAdmins } from "@/app/hooks/use-fetch-administrations";
import { toast } from "react-toastify";

type Props = {
  data: LicenceEntity;
};

export default function EditLicenceForm({ data: licence }: Props) {
  const { data: admins, isLoading: isLoadingAdmins } = useFetchAdmins();
  const { mutateAsync, isPending } = useEditLicence();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EditLicenceDTO>({
    resolver: zodResolver(editLicenceSchema),
    defaultValues: {
      id: licence.id,
      administration_id: licence.administration_id,
      creation_date: licence.creation_date
        .toString()
        .split("T")[0]
        .replace("/", "-"),
      description: licence.description,
      licence_number: licence.licence_number,
    },
  });

  const onSubmit = async (data: EditLicenceDTO) => {
    const response = await mutateAsync(data);
    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Form.Wrapper
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isPending}
      submitLabel="Atualizar"
    >
      <Form.Row>
        <Form.Field>
          <Label>Nº da licença</Label>
          <Input
            type="text"
            {...register("licence_number")}
            placeholder="N01"
          />
          {errors.licence_number && (
            <Form.Error error={errors.licence_number.message} />
          )}
        </Form.Field>
        <Form.Field>
          <Label>Descrição</Label>
          <Input type="text" {...register("description")} placeholder="PT1" />
          {errors.description && (
            <Form.Error error={errors.description.message} />
          )}
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>Administração</Label>
          <Controller
            control={control}
            name="administration_id"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full !h-input">
                  <SelectValue placeholder="Selecionar administração" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {isLoadingAdmins ? (
                    <Loading size={5} color={COLORS.RED[600]} />
                  ) : dataIsNotValid(admins) ? (
                    <EmptyDataState />
                  ) : (
                    admins?.map((admin, index) => (
                      <SelectItem
                        key={index}
                        value={admin.id}
                        className="text-GREEN-600 hover:text-GREEN-200 duration-200 transition-colors ease-in-out cursor-pointer"
                      >
                        {admin.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
          {errors.administration_id && (
            <Form.Error error={errors.administration_id.message} />
          )}
        </Form.Field>

        <Form.Field>
          <Label>Data de criação</Label>
          <Input type="date" {...register("creation_date")} />
          {errors.creation_date && (
            <Form.Error error={errors.creation_date.message} />
          )}
        </Form.Field>
      </Form.Row>

      <PreviewImage
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        setValue={() => setValue("image", null)}
      />
      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Imagem</Label>
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  field.onChange(file);
                  if (file) {
                    const preview = URL.createObjectURL(file);
                    setPreviewImage(preview);
                  }
                }}
              />
            )}
          />
        </Form.Field>
      </Form.Row>
    </Form.Wrapper>
  );
}
