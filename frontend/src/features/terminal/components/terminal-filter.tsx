import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/shared/form"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import {
  ProvinceEntity,
  CityEntity,
  AreaEntity,
  ZoneEntity,
  DataState,
} from "@/app/types"
import Loading from "@/components/shared/loading"
import EmptyDataState from "@/components/shared/empty-data-state"
import { dataIsNotValid } from "@/app/utils/check-data"

type Filters = {
  province_id: string
  city_id: string
  area_id: string
  zone_id: string
}

type Props = {
  provinces: DataState<ProvinceEntity>
  cities: DataState<CityEntity>
  areas: DataState<AreaEntity>
  zones: DataState<ZoneEntity>
}

export default function TerminalFilter({
  provinces,
  cities,
  areas,
  zones,
}: Props) {
  const [_searchParams, setSearchParams] = useSearchParams()

  const [filters, setFilters] = useState<Filters>({
    province_id: "",
    city_id: "",
    area_id: "",
    zone_id: "",
  })

  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleApplyFilters = () => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    setSearchParams(params)
  }

  const handleClearFilters = () => {
    setFilters({
      province_id: "",
      city_id: "",
      area_id: "",
      zone_id: "",
    })
    setSearchParams({})
  }

  return (
    <form className="flex flex-col gap-6 w-full">
      <Form.Row className="border-b pb-5">
        <Form.Field>
          <Label>Província</Label>
          <Select
            value={filters.province_id}
            onValueChange={(value) => handleChange("province_id", value)}
          >
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Província" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {provinces.isLoading ? (
                <Loading />
              ) : dataIsNotValid(provinces.data) ? (
                <EmptyDataState />
              ) : (
                provinces.data?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field>
          <Label>Cidade</Label>
          <Select
            value={filters.city_id}
            onValueChange={(value) => handleChange("city_id", value)}
          >
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Cidade" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {cities.isLoading ? (
                <Loading />
              ) : dataIsNotValid(cities.data) ? (
                <EmptyDataState />
              ) : (
                cities.data?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field>
          <Label>Área</Label>
          <Select
            value={filters.area_id}
            onValueChange={(value) => handleChange("area_id", value)}
          >
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Área" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {areas.isLoading ? (
                <Loading />
              ) : dataIsNotValid(areas.data) ? (
                <EmptyDataState />
              ) : (
                areas.data?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </Form.Field>

        <Form.Field>
          <Label>Zona</Label>
          <Select
            value={filters.zone_id}
            onValueChange={(value) => handleChange("zone_id", value)}
          >
            <SelectTrigger className="w-full !h-input">
              <SelectValue placeholder="Zona" />
            </SelectTrigger>
            <SelectContent className="h-select-input-content">
              {zones.isLoading ? (
                <Loading />
              ) : dataIsNotValid(zones.data) ? (
                <EmptyDataState />
              ) : (
                zones.data?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.value}
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
