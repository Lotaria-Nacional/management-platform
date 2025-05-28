import {
  AreaEntity,
  CityEntity,
  TypeEntity,
  ZoneEntity,
  LicenceEntity,
  ProvinceEntity,
  AdministrationEntity,
} from "@/app/types"
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Loading from "@/components/shared/loading"
import { useEditPos } from "../hooks/use-edit-pos"
import { checkArrayData } from "@/app/utils/check-data"
import { IEditPosRequestDTO, PosEntity } from "../types"
import Fieldset from "@/components/shared/form/fieldset"
import { useDependentData } from "../hooks/use-dependent-data"
import EmptyDataState from "@/components/shared/empty-data-state"
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper"
import TypeDropdownCustom from "@/components/shared/type-dropdown-custom"

export type DataState<T> = {
  data?: T[]
  isLoading: boolean
}

export type EditPosFormProps = {
  pos: PosEntity
  zones: DataState<ZoneEntity>
  areas: DataState<AreaEntity>
  cities: DataState<CityEntity>
  provinces: DataState<ProvinceEntity>
  licences: DataState<LicenceEntity>
  types: DataState<TypeEntity>
  admins: DataState<AdministrationEntity>
}

type Props = EditPosFormProps

export default function EditPosForm(props: Props) {
  const { isPending, mutateAsync } = useEditPos()

  const { areas, cities, provinces, types, zones, licences, admins, pos } =
    props
  const [formData, setFormData] = useState<
    IEditPosRequestDTO & { coords: string }
  >({
    id: pos.id,
    id_reference: pos.id_reference,
    province_id: pos.province?.id.toString() || "",
    city_id: pos.city?.id.toString() || "",
    area_id: pos.area?.id.toString() || "",
    zone_id: pos.zone?.id.toString() || "",
    administration_id: pos.administration?.id.toString() || "",
    type_id: pos.type?.id.toString() || "",
    subtype_id: pos.subtype?.id.toString() || "",
    licence_id: pos.licence?.id.toString() || "",
    coordinates: pos.coordinates,
    coords: pos.coordinates.join(","),
  })

  const filteredCities = useDependentData(
    provinces.data,
    pos.province.id,
    (prov) => prov.id.toString(),
    (prov) => prov.cities
  )

  const filteredAreas = useDependentData(
    cities.data,
    pos.city.id,
    (city) => city.id.toString(),
    (city) => city.areas
  )

  const filteredZones = useDependentData(
    areas.data,
    pos.area.id,
    (area) => area.id.toString(),
    (area) => area.zones
  )

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const coordinates = formData.coords.split(",").map(Number)
      await mutateAsync({
        ...formData,
        id: pos.id,
        coordinates: coordinates,
      })

      toast.success("POS atualizado com sucesso!")
    } catch (error) {
      console.error("Error ao atualizar o POS:", error)
    }
  }

  return (
    <div className="bg-white rounded-button p-4 space-y-4">
      <header>
        <h1>Atualizar POS</h1>
      </header>
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
              value={formData.id_reference as number}
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
              defaultValue={formData.city_id}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  city_id: value,
                  area_id: "",
                  zone_id: "",
                })
              }
              value={formData.city_id}
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
              defaultValue={pos.zone.id}
              onValueChange={(value) =>
                setFormData({ ...formData, zone_id: value })
              }
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
              defaultValue={pos.administration.id}
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
              defaultValue={pos.licence?.id ?? ""}
              onValueChange={(value) =>
                setFormData({ ...formData, licence_id: value })
              }
            >
              <SelectTrigger className="!h-input w-full">
                <SelectValue placeholder="Selecionar Licença" />
              </SelectTrigger>
              <SelectContent className="h-[140px]">
                {licences.isLoading ? (
                  <Loading />
                ) : !licences.data || licences.data.length === 0 ? (
                  <EmptyDataState />
                ) : (
                  licences.data.map((licence) => (
                    <SelectItem
                      className={`px-3 rounded-sm cursor-pointer hover:bg-GRAY-100 transition-all duration-200 ease-in-out !w-full flex items-center gap-1 ${
                        licence.pos ? "text-RED-500" : "text-GREEN-500"
                      }`}
                      key={licence.id}
                      value={licence.id.toString()}
                    >
                      <span>{licence.reference_id}</span>
                      <span>-</span>
                      <span>{licence.pos ? "(Ocupada)" : "(Livre)"}</span>
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
            value={formData.coords}
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
          {isPending ? <Loading /> : "Atualizar"}
        </Button>
      </form>
    </div>
  )
}
