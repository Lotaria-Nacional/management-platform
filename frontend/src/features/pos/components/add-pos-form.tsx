import {
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import {
  AreaEntity,
  CityEntity,
  TypeEntity,
  ZoneEntity,
  LicenceEntity,
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
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { IAddPosRequestDTO, PosEntity } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAddPos } from "../hooks/use-add-pos";
import Loading from "@/components/shared/loading";
import { AgentEntity } from "@/features/agents/types";
import Fieldset from "@/components/shared/form/fieldset";
import { useDependentData } from "../hooks/use-dependent-data";
import EmptyDataState from "@/components/shared/empty-data-state";
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper";
import TypeDropdownCustom from "@/components/shared/type-dropdown-custom";
import { checkArrayData } from "@/app/utils/check-data";

export type DataState<T> = {
  data?: T[];
  isLoading: boolean;
};

export type DataStateWithoutArray<T> = {
  data?: T;
  isLoading: boolean;
};

export type RegisterPosFormProps = {
  agents: DataState<AgentEntity>;
  zones: DataState<ZoneEntity>;
  areas: DataState<AreaEntity>;
  cities: DataState<CityEntity>;
  provinces: DataState<ProvinceEntity>;
  licences: DataState<LicenceEntity>;
  types: DataState<TypeEntity>;
  // subtypes: DataState<SubtypeEntity>
  pos: DataStateWithoutArray<PosEntity>;
  admins: DataState<AdministrationEntity>;
};

type Props = RegisterPosFormProps;

export default function RegisterPosForm(props: Props) {
  const { isPending, mutateAsync } = useAddPos();
  const { areas, cities, provinces, types, zones, licences, admins, pos } =
    props;
  const [formData, setFormData] = useState<
    IAddPosRequestDTO & { coords: string }
  >({
    area_id: "",
    city_id: "",
    coordinates: [],
    id_reference: 0,
    licence_id: "",
    province_id: "",
    type_id: "",
    subtype_id: "",
    zone_id: "",
    administration_id: "",
    agent_id: "",
    coords: "",
  });

  const filteredCities = useDependentData(
    provinces.data,
    formData.province_id,
    (prov) => prov.id.toString(),
    (prov) => prov.cities
  );

  const filteredAreas = useDependentData(
    cities.data,
    formData.city_id,
    (city) => city.id.toString(),
    (city) => city.areas
  );

  const filteredZones = useDependentData(
    areas.data,
    formData.area_id,
    (area) => area.id.toString(),
    (area) => area.zones
  );

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const coordinates = formData.coords.split(",").map(Number);
      await mutateAsync({
        ...formData,
        coordinates: coordinates,
      });
      toast.success("POs adicionado com sucesso!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um POS</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleOnSubmit} className="space-y-5">
        {/*  ################# FIRST INPUT ################# */}
        <FieldsetWrapper>
          <Fieldset>
            <Label>ID Referência</Label>
            <Input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  id_reference: Number(e.target.value),
                })
              }
              placeholder="1000943"
            />
          </Fieldset>

          <Fieldset>
            <Label>Província</Label>
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  province_id: value,
                  city_id: "",
                  area_id: "",
                })
              }
              value={formData.province_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher província" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {provinces.isLoading ? (
                  <Loading />
                ) : !provinces.data?.length ? (
                  <EmptyDataState />
                ) : (
                  provinces.data.map((prov) => (
                    <SelectItem key={prov.id} value={prov.id.toString()}>
                      {prov.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </Fieldset>
        </FieldsetWrapper>

        {/*  ################# SECOND INPUT ################# */}
        <FieldsetWrapper>
          <Fieldset>
            <Label>Cidade</Label>
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  city_id: value,
                  area_id: "",
                  zone_id: "",
                })
              }
              value={formData.city_id}
              disabled={!formData.province_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher cidade" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {cities.isLoading ? (
                  <Loading />
                ) : !filteredCities.length ? (
                  <EmptyDataState />
                ) : (
                  filteredCities.map((city) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </Fieldset>

          <Fieldset>
            <Label>Área</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, area_id: val, zone_id: "" })
              }
              value={formData.area_id}
              disabled={!formData.city_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher área" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {areas.isLoading ? (
                  <Loading />
                ) : !filteredAreas.length ? (
                  <EmptyDataState />
                ) : (
                  filteredAreas.map((area) => (
                    <SelectItem key={area.id} value={area.id.toString()}>
                      {area.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </Fieldset>
        </FieldsetWrapper>

        {/*  ################# THIRD INPUT ################# */}
        <FieldsetWrapper>
          <Fieldset>
            <Label>Zona</Label>
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  zone_id: value,
                })
              }
              value={formData.zone_id}
              disabled={!formData.area_id}
            >
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar zona" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {zones.isLoading ? (
                  <Loading />
                ) : !filteredZones.length ? (
                  <EmptyDataState />
                ) : (
                  filteredZones.map((zone) => (
                    <SelectItem key={zone.id} value={zone.id}>
                      {zone.zone_number}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </Fieldset>

          <Fieldset>
            <Label>Administração</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, administration_id: value })
              }
            >
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar administração" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {admins.isLoading ? (
                  <Loading />
                ) : admins.data && checkArrayData(admins.data) ? (
                  admins.data.map((admin) => (
                    <SelectItem key={admin.id} value={admin.id}>
                      {admin.name}
                    </SelectItem>
                  ))
                ) : (
                  <EmptyDataState />
                )}
              </SelectContent>
            </Select>
          </Fieldset>
        </FieldsetWrapper>

        {/*  ################# FOURTH INPUT ################# */}
        <FieldsetWrapper>
          <Fieldset>
            <Label htmlFor="tipo">Tipo</Label>
            <TypeDropdownCustom
              types={types}
              onSelectType={(type_id) =>
                setFormData((prev) => ({ ...prev, type_id }))
              }
              onSelectSubtype={(subtype_id, type_id) =>
                setFormData((prev) => ({ ...prev, subtype_id, type_id }))
              }
            />
          </Fieldset>

          <Fieldset>
            <Label>Licença</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, licence_id: value })
              }
            >
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar Licença" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {licences.isLoading || pos.isLoading ? (
                  <Loading />
                ) : !licences.data || !licences.data.length ? (
                  <EmptyDataState />
                ) : (
                  licences.data.map((licence) => (
                    <SelectItem
                      key={licence.id}
                      value={licence.id.toString()}
                      disabled={licence.pos ? true : false}
                      className={`px-3 rounded-sm cursor-pointer hover:bg-GRAY-100 transition-all duration-200 ease-in-out !w-full flex items-center gap-1 ${
                        licence.pos ? "text-RED-500" : "text-GREEN-500"
                      }`}
                    >
                      <span>Ref: {licence.reference_id}</span>
                      <span>-</span>
                      <span>{licence.pos ? "Ocupada" : "Livre"}</span>
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </Fieldset>
        </FieldsetWrapper>

        {/*  ################# LAST INPUT ################# */}
        <Fieldset>
          <Label>Coordenadas</Label>
          <Input
            className="w-full"
            placeholder="8.984678236840, -8.743669274828"
            onChange={(e) =>
              setFormData({ ...formData, coords: e.target.value })
            }
          />
        </Fieldset>

        <Button
          variant={"red"}
          type="submit"
          disabled={isPending}
          className="w-full h-input"
        >
          {isPending ? <Loading /> : "Adicionar"}
        </Button>
      </form>
    </DialogContent>
  );
}
