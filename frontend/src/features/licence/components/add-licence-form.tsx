import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AddLicenceDTO,
  addLicenceSchema,
} from "../validations/add-licence-schema";
import { useState } from "react";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/shared/form";
import { COLORS } from "@/app/constants/colors";
import Loading from "@/components/shared/loading";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataIsNotValid } from "@/app/utils/check-data";
import { useAddLicence } from "../hooks/use-add-licence";
import PreviewImage from "@/components/shared/preview-image";
import EmptyDataState from "@/components/shared/empty-data-state";
import { useFetchAdmins } from "@/app/hooks/use-fetch-administrations";

export default function AddLicenceForm() {
  const { data: admins, isLoading: isLoadingAdmins } = useFetchAdmins();
  const { mutateAsync, isPending } = useAddLicence();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AddLicenceDTO>({
    resolver: zodResolver(addLicenceSchema),
  });

  const onSubmit = async (data: AddLicenceDTO) => {
    const response = await mutateAsync(data);
    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Form.Wrapper
      submitLabel="Adicionar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Row>
        <Form.Field>
          <Label>Referência</Label>
          <Input
            type="text"
            {...register("licence_reference")}
            placeholder="MAIANGA-N01-2025-PT1"
          />
          {errors.licence_reference && (
            <Form.Error error={errors.licence_reference.message} />
          )}
        </Form.Field>

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
                accept="image/*"
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
