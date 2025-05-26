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
  SubtypeEntity,
} from "@/app/types";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { IAddPosRequestDTO } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAddPos } from "../hooks/use-add-pos";
import Loading from "@/components/shared/loading";
import { FormEvent, useState } from "react";
import { AgentEntity } from "@/features/agents/types";
import Fieldset from "@/components/shared/form/fieldset";
import EmptyDataState from "@/components/shared/empty-data-state";
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper";
import { useDependentData } from "../hooks/use-dependent-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { SelectWithSubmenu } from "@/components/shared/select-with-submenu";

export type DataState<T> = {
  data?: T[];
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
  subtypes: DataState<SubtypeEntity>;
  admins: DataState<AdministrationEntity>;
};

type Props = RegisterPosFormProps;

export default function RegisterPosForm(props: Props) {
  const { isPending } = useAddPos();

  const { areas, cities, provinces, types, zones } = props;

  const [posData, setPosData] = useState<IAddPosRequestDTO>({
    area_id: "",
    city_id: "",
    coordinates: "",
    id_reference: "",
    licence_id_id: "",
    province_id: "",
    type_id: "",
    subtype_id: "",
    zone_id: "",
    admin_id: "",
    agent_id: "",
  });

  const filteredCities = useDependentData(
    provinces.data,
    posData.province_id,
    (prov) => prov.id.toString(),
    (prov) => prov.cities
  );

  const filteredAreas = useDependentData(
    cities.data,
    posData.city_id,
    (city) => city.id.toString(),
    (city) => city.areas
  );

  const filteredZones = useDependentData(
    areas.data,
    posData.area_id,
    (area) => area.id.toString(),
    (area) => area.zones
  );

  const filteredSubtypes = useDependentData(
    types.data,
    posData.type_id,
    (type) => type.id.toString(),
    (type) => type.subtypes ?? []
  );
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // await mutateAsync(posData)
      // console.log(posData);
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
            <Input placeholder="1000943" />
          </Fieldset>

          <Fieldset>
            <Label>Província</Label>
            <Select
              onValueChange={(value) =>
                setPosData({
                  ...posData,
                  province_id: value,
                  city_id: "",
                  area_id: "",
                })
              }
              value={posData.province_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher província" />
              </SelectTrigger>
              <SelectContent>
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
                setPosData({
                  ...posData,
                  city_id: value,
                  area_id: "",
                  zone_id: "",
                })
              }
              value={posData.city_id}
              disabled={!posData.province_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher cidade" />
              </SelectTrigger>
              <SelectContent>
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
                setPosData({ ...posData, area_id: val, zone_id: "" })
              }
              value={posData.area_id}
              disabled={!posData.city_id}
            >
              <SelectTrigger className="!h-input !w-full">
                <SelectValue placeholder="Escolher área" />
              </SelectTrigger>
              <SelectContent>
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
                setPosData({
                  ...posData,
                  zone_id: value,
                })
              }
              value={posData.zone_id}
              disabled={!posData.area_id}
            >
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar zona" />
              </SelectTrigger>
              <SelectContent>
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
            <Select>
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar administração" />
              </SelectTrigger>
              <SelectContent>
                {cities.isLoading ? (
                  <Loading />
                ) : filteredAreas.length > 0 ? (
                  filteredAreas.map((province) => (
                    <SelectItem key={province.id} value={province.id}>
                      {province.name}
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
            <Label>Tipo</Label>
            <SelectWithSubmenu
              types={types}
              onSelectType={(typeId, subtypeId) =>
                setPosData({
                  ...posData,
                  type_id: typeId,
                  subtype_id: subtypeId ?? "",
                })
              }
            />
          </Fieldset>

          <Fieldset>
            <Label>Licença</Label>
            <Select>
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar subtipo" />
              </SelectTrigger>
              <SelectContent>
                {types.isLoading ? (
                  <Loading />
                ) : [1, 3, 4].length > 0 ? (
                  [1, 3, 4].map((subtype) => (
                    <SelectItem key={subtype} value={subtype.toString()}>
                      {subtype}
                    </SelectItem>
                  ))
                ) : (
                  <EmptyDataState />
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
