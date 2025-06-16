import { Label } from "@/components/ui/label"
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Form } from "@/components/shared/form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import {
  ProvinceEntity,
  CityEntity,
  AreaEntity,
  ZoneEntity,
  TypeEntity,
  DataState,
} from "@/app/types"
import EmptyDataState from "@/components/shared/empty-data-state"
import Loading from "@/components/shared/loading"
import { dataIsNotValid } from "@/app/utils/check-data"

type Filters = {
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  type_id?: string
}

type Props = {
  provinces: DataState<ProvinceEntity>
  cities: DataState<CityEntity>
  areas: DataState<AreaEntity>
  zones: DataState<ZoneEntity>
  types: DataState<TypeEntity>
}

export default function PosFilter({
  provinces,
  cities,
  areas,
  zones,
  types,
}: Props) {
  const [_searchParams, setSearchParams] = useSearchParams()

  const [formData, setFormData] = useState<Filters>({
    area_id: "",
    city_id: "",
    province_id: "",
    type_id: "",
    zone_id: "",
  })

  const handleChange = (key: keyof Filters, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleApplyFilters = () => {
    const newParams = new URLSearchParams()
    Object.entries(formData).forEach(([key, value]) => {
      if (value) newParams.set(key, value)
    })
    setSearchParams(newParams)
  }

  const handleClearFilters = () => {
    setFormData({
      province_id: "",
      city_id: "",
      area_id: "",
      zone_id: "",
      type_id: "",
    })
    setSearchParams({})
  }

  return (
    <form className="flex flex-col gap-6 w-full">
      <Form.Row className="border-b pb-5">
        <Form.Field>
          <Label>Província</Label>
          <Select onValueChange={(val) => handleChange("province_id", val)}>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Província" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {provinces.isLoading ? (
                <Loading />
              ) : dataIsNotValid(provinces.data) ? (
                <EmptyDataState />
              ) : (
                provinces.data?.map((province) => (
                  <SelectItem key={province.id} value={province.id}>
                    {province.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field>
          <Label>Cidade</Label>
          <Select onValueChange={(val) => handleChange("city_id", val)}>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Cidade" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {cities.isLoading ? (
                <Loading />
              ) : dataIsNotValid(cities.data) ? (
                <EmptyDataState />
              ) : (
                cities.data?.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field>
          <Label>Área</Label>
          <Select onValueChange={(val) => handleChange("area_id", val)}>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Área" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {areas.isLoading ? (
                <Loading />
              ) : dataIsNotValid(areas.data) ? (
                <EmptyDataState />
              ) : (
                areas.data?.map((area) => (
                  <SelectItem key={area.id} value={area.id}>
                    {area.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field>
          <Label>Zona</Label>
          <Select onValueChange={(val) => handleChange("zone_id", val)}>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Zona" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {zones.isLoading ? (
                <Loading />
              ) : dataIsNotValid(zones.data) ? (
                <EmptyDataState />
              ) : (
                zones.data?.map((zone) => (
                  <SelectItem key={zone.id} value={zone.id}>
                    {zone.value}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>
      </Form.Row>

      <Form.Row>
        <Form.Field className="col-span-2">
          <Label>Filtrar por tipo</Label>
          <Select onValueChange={(val) => handleChange("type_id", val)}>
            <SelectTrigger className="w-full !h-input col-span-2">
              <SelectValue placeholder="Selecionar tipo" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {types.isLoading ? (
                <Loading />
              ) : dataIsNotValid(types.data) ? (
                <EmptyDataState />
              ) : (
                types.data?.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>
      </Form.Row>

      <div className="grid grid-cols-2 gap-4">
        <Button type="button" variant="secondary" onClick={handleClearFilters}>
          Limpar tudo
        </Button>
        <Button type="button" variant="red" onClick={handleApplyFilters}>
          Aplicar filtro
        </Button>
      </div>
    </form>
  )
}
