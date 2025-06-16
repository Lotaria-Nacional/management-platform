import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/shared/form"
import { Button } from "@/components/ui/button"
import { SelectValue } from "@radix-ui/react-select"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import {
  AreaEntity,
  CityEntity,
  DataState,
  ProvinceEntity,
  TypeEntity,
  ZoneEntity,
} from "@/app/types"
import Loading from "@/components/shared/loading"
import { dataIsNotValid } from "@/app/utils/check-data"
import EmptyDataState from "@/components/shared/empty-data-state"
import { AgentStatusEnum } from "../enums/agent-status"

type Props = {
  provinces: DataState<ProvinceEntity>
  cities: DataState<CityEntity>
  area: DataState<AreaEntity>
  zones: DataState<ZoneEntity>
  type: DataState<TypeEntity>
}

type Filters = {
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  type_id?: string
  status?: string
}

export default function AgentFilter({
  provinces,
  area,
  cities,
  type,
  zones,
}: Props) {
  const [_searchParams, setSearchParams] = useSearchParams()

  const [formData, setFormData] = useState<Filters>({
    area_id: "",
    city_id: "",
    province_id: "",
    status: "",
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

  function handleClearFilters() {
    setFormData({
      province_id: "",
      city_id: "",
      area_id: "",
      zone_id: "",
      status: "",
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
            <SelectContent>
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
        </Form.Field>

        <Form.Field>
          <Label>Cidade</Label>
          <Select onValueChange={(val) => handleChange("city_id", val)}>
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Cidade" />
            </SelectTrigger>
            <SelectContent>
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
            <SelectContent>
              {area.isLoading ? (
                <Loading />
              ) : dataIsNotValid(area.data) ? (
                <EmptyDataState />
              ) : (
                area.data?.map((a) => (
                  <SelectItem key={a.id} value={a.id}>
                    {a.name}
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
            <SelectContent>
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

      <Form.Row className="border-b pb-5">
        <Form.Field className="col-span-2">
          <Label>Filtrar por estado</Label>
          <Select onValueChange={(val) => handleChange("status", val)}>
            <SelectTrigger className="w-full !h-input col-span-2">
              <SelectValue placeholder="Selecionar estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={AgentStatusEnum.ACTIVE}>
                {AgentStatusEnum.ACTIVE}
              </SelectItem>
              <SelectItem value={AgentStatusEnum.INACTIVE}>
                {AgentStatusEnum.INACTIVE}
              </SelectItem>
              <SelectItem value={AgentStatusEnum.PENDING}>
                {AgentStatusEnum.PENDING}
              </SelectItem>
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
            <SelectContent>
              {type.isLoading ? (
                <Loading />
              ) : dataIsNotValid(type.data) ? (
                <EmptyDataState />
              ) : (
                type.data?.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name}
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
