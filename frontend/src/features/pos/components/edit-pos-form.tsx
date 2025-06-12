import {
  DataState,
  AreaEntity,
  CityEntity,
  TypeEntity,
  ZoneEntity,
  ProvinceEntity,
  AdministrationEntity,
} from "@/app/types";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { PosEntity } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/shared/form";
import Loading from "@/components/shared/loading";
import { useEditPos } from "../hooks/use-edit-pos";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataIsNotValid } from "@/app/utils/check-data";
import { useDependentData } from "../hooks/use-dependent-data";
import EmptyDataState from "@/components/shared/empty-data-state";
import { LicenceEntity } from "@/features/licence/components/types";
import TypeDropdownCustom from "@/components/shared/type-dropdown-custom";
import { EditPosDTO, editPosSchema } from "../validation/edit-pos-schema";
import { toast } from "react-toastify";

export type Props = {
  zones: DataState<ZoneEntity>;
  areas: DataState<AreaEntity>;
  types: DataState<TypeEntity>;
  cities: DataState<CityEntity>;
  licences: DataState<LicenceEntity>;
  provinces: DataState<ProvinceEntity>;
  admins: DataState<AdministrationEntity>;
  pos: PosEntity;
};

export default function EditPosForm(props: Props) {
  const { areas, cities, provinces, types, licences, admins, pos } = props;
  const { isPending, mutateAsync } = useEditPos();

  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<EditPosDTO>({
    resolver: zodResolver(editPosSchema),
    defaultValues: {
      id: pos.id,
      area_id: pos.area.id,
      type_id: pos.type.id,
      zone_id: pos.zone.id,
      city_id: pos.city.id,
      subtype_id: pos.subtype?.id,
      licence_id: pos.licence?.id,
      province_id: pos.province.id,
      latitude: pos.latitude,
      longitude: pos.longitude,
      administration_id: pos.administration?.id,
    },
  });

  const cityId = watch("city_id");
  const areaId = watch("area_id");
  const provinceId = watch("province_id");

  const filteredCities = useDependentData(
    provinces.data,
    provinceId,
    (p) => p.id.toString(),
    (p) => p.cities
  );

  const filteredAreas = useDependentData(
    cities.data,
    cityId,
    (c) => c.id.toString(),
    (c) => c.areas
  );

  const filteredZones = useDependentData(
    areas.data,
    areaId,
    (a) => a.id.toString(),
    (a) => a.zone
  );

  const onSubmit = async (data: EditPosDTO) => {
    const response = await mutateAsync(data);

    if (response.sucess) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Form.Wrapper
      submitLabel="Atualizar"
      isSubmitting={isPending}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/** INPUT ROW 1 */}
      <Form.Row>
        <Form.Field>
          <Label>Província</Label>
          <Controller
            name="province_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a província" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {provinces.isLoading ? (
                    <Loading />
                  ) : dataIsNotValid(provinces.data) ? (
                    <EmptyDataState />
                  ) : (
                    provinces.data?.map((province, index) => (
                      <SelectItem key={index} value={province.id}>
                        {province.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
          {errors.province_id && (
            <Form.Error error={errors.province_id.message} />
          )}
        </Form.Field>
        <Form.Field>
          <Label>Cidade</Label>
          <Controller
            name="city_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a cidade" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {filteredCities?.map((city, index) => (
                    <SelectItem key={index} value={city.id}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.city_id && <Form.Error error={errors.city_id.message} />}
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>Área</Label>
          <Controller
            name="area_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a área" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {filteredAreas?.map((area, index) => (
                    <SelectItem key={index} value={area.id}>
                      {area.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.area_id && <Form.Error error={errors.area_id.message} />}
        </Form.Field>
        <Form.Field>
          <Label>Zona</Label>
          <Controller
            name="zone_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a zona" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {filteredZones?.map((zone, index) => (
                    <SelectItem key={index} value={zone.id}>
                      {zone.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.zone_id && <Form.Error error={errors.zone_id.message} />}
        </Form.Field>
      </Form.Row>

      <Form.Row className="grid grid-cols-2">
        <Form.Field>
          <Label>Administração</Label>
          <Controller
            name="administration_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a administração" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {admins.isLoading ? (
                    <Loading />
                  ) : dataIsNotValid(admins.data) ? (
                    <EmptyDataState />
                  ) : (
                    admins.data?.map((admin, index) => (
                      <SelectItem key={index} value={admin.id}>
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
          <Label>Licença</Label>
          <Controller
            name="licence_id"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="!h-input w-full">
                  <SelectValue placeholder="Selecionar a licença" />
                </SelectTrigger>
                <SelectContent className="h-select-input-content">
                  {licences.isLoading ? (
                    <Loading />
                  ) : dataIsNotValid(licences.data) ? (
                    <EmptyDataState />
                  ) : (
                    licences.data?.map((licence, index) => (
                      <SelectItem
                        key={index}
                        value={licence.id}
                        className="cursor-pointer text-GREEN-600 hover:text-GREEN-200 duration-200 ease-in-out transition-colors"
                      >
                        <span>{licence.licence_reference}</span>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Tipo</Label>
          <Controller
            name="type_id"
            control={control}
            render={({ field }) => (
              <Controller
                name="subtype_id"
                control={control}
                render={({ field: subtypeField }) => (
                  <TypeDropdownCustom
                    types={types}
                    typeId={field.value}
                    subtypeId={subtypeField.value}
                    onTypeChange={field.onChange}
                    onSubtypeChange={subtypeField.onChange}
                  />
                )}
              />
            )}
          />
          {errors.type_id && <Form.Error error={errors.type_id.message} />}
          {errors.subtype_id && (
            <Form.Error error={errors.subtype_id.message} />
          )}
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>Latitude</Label>
          <Input
            className="w-full"
            placeholder="-8.812343"
            {...register("latitude")}
          />
          {errors.latitude && <Form.Error error={errors.latitude.message} />}
        </Form.Field>
        <Form.Field>
          <Label>Longitude</Label>
          <Input
            className="w-full"
            placeholder="7.125097"
            {...register("longitude")}
          />
          {errors.longitude && <Form.Error error={errors.longitude.message} />}
        </Form.Field>
      </Form.Row>
    </Form.Wrapper>
  );
}
