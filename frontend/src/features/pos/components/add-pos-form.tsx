import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { IAddPosRequestDTO } from "../types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAddPos } from "../hooks/use-add-pos"
import { COLORS } from "@/app/constants/colors"
import Loading from "@/components/shared/loading"
import { AgentEntity } from "@/features/agents/types"
import { checkArrayData } from "@/app/utils/check-data"
import Fieldset from "@/components/shared/form/fieldset"
import FieldsetWrapper from "@/components/shared/form/fieldset-wrapper"
import EmptyDataState from "@/components/shared/empty-data-state"
import {
  AdministrationEntity,
  AreaEntity,
  CityEntity,
  LicenceEntity,
  ProvinceEntity,
  TypeEntity,
  ZoneEntity,
} from "@/app/types"

type Props = {
  agents?: AgentEntity[]
  isLoadingAgents: boolean
  zones: {
    data?: ZoneEntity[]
    isLoadingZones: boolean
  }
  areas: {
    data?: AreaEntity[]
    isLoadingAreas: boolean
  }
  cities: {
    data?: CityEntity[]
    isLoadingCities: boolean
  }
  provinces: {
    data?: ProvinceEntity[]
    isLoadingProvinces: boolean
  }
  licences: {
    data?: LicenceEntity[]
    isLoadingLicences: boolean
  }
  types: {
    data?: TypeEntity[]
    isLoadingTypes: boolean
  }
  admins: {
    data?: AdministrationEntity[]
    isLoadingAdmins: boolean
  }
}

export default function RegisterPosForm({
  isLoadingAgents,
  agents,
  admins,
  types,
  areas,
  provinces,
  zones,
}: Props) {
  const { isPending } = useAddPos()

  const [posData, setPosData] = useState<IAddPosRequestDTO>({
    area_id: "",
    city_id: "",
    coordinates: "",
    id_reference: "",
    licence_id_id: "",
    province_id: "",
    type_id: "",
    zone_id: "",
    admin_id: "",
    agent_id: "",
  })

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      // await mutateAsync(posData)
      console.log(posData)
      toast.success("POs adicionado com sucesso!")
    } catch (error) {
      console.error("Error uploading file:", error)
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um POS</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <FieldsetWrapper>
          <Fieldset>
            <label>ID Referência POS</label>
            <div className="w-full">
              <Input
                type="text"
                value={posData.id_reference}
                onChange={(e) =>
                  setPosData({ ...posData, id_reference: e.target.value })
                }
                placeholder="ID Referência POS"
              />
            </div>
          </Fieldset>
          <Fieldset>
            <Fieldset>
              <label className="font-medium">Administração</label>
              <div className="w-full">
                <Select
                  onValueChange={(value) =>
                    setPosData({ ...posData, admin_id: value })
                  }
                >
                  <SelectTrigger className="w-full !h-input-sm md:!h-input">
                    <SelectValue placeholder="Selecione a área" />
                  </SelectTrigger>
                  <SelectContent
                    side="top"
                    className="h-[150px] text-small md:text-body"
                  >
                    {admins.isLoadingAdmins ? (
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
              </div>
            </Fieldset>
          </Fieldset>
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label>Coordenadas</label>
            <div className="w-full">
              <Input
                type="text"
                placeholder="Coordenadas"
                value={posData.coordinates}
                onChange={(e) =>
                  setPosData({
                    ...posData,
                    coordinates: e.target.value,
                  })
                }
              />
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Área
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, area_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a área" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {areas.isLoadingAreas ? (
                    <Loading />
                  ) : areas.data && checkArrayData(areas.data) ? (
                    areas.data.map((area) => (
                      <SelectItem key={area.id} value={area.id}>
                        {area.name}
                      </SelectItem>
                    ))
                  ) : (
                    <EmptyDataState />
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Zona
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, zone_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione uma zona" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {zones.isLoadingZones ? (
                    <Loading />
                  ) : zones.data && checkArrayData(zones.data) ? (
                    zones.data.map((zone) => (
                      <SelectItem key={zone.id} value={zone.id}>
                        {zone.zone_number}
                      </SelectItem>
                    ))
                  ) : (
                    <EmptyDataState />
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Tipo
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, type_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-fit text-small md:text-body"
                >
                  {types.isLoadingTypes ? (
                    <Loading />
                  ) : types.data && checkArrayData(types.data) ? (
                    types.data.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))
                  ) : (
                    <EmptyDataState />
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

        <FieldsetWrapper>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Província
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, province_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a província" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {provinces.isLoadingProvinces ? (
                    <Loading />
                  ) : provinces.data && checkArrayData(provinces.data) ? (
                    provinces.data.map((province) => (
                      <SelectItem key={province.id} value={province.id}>
                        {province.name}
                      </SelectItem>
                    ))
                  ) : (
                    <EmptyDataState />
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
          <Fieldset>
            <label htmlFor="name" className="font-medium">
              Agente
            </label>
            <div className="w-full">
              <Select
                onValueChange={(value) =>
                  setPosData({ ...posData, agent_id: value })
                }
              >
                <SelectTrigger className="w-full !h-input-sm md:!h-input">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent
                  side="top"
                  className="h-[150px] text-small md:text-body"
                >
                  {isLoadingAgents ? (
                    <Loading showText color={COLORS.RED[700]} />
                  ) : checkArrayData<AgentEntity>(agents) ? (
                    agents?.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        <span>{agent.first_name}</span>
                        <span>{agent.last_name}</span>
                      </SelectItem>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span>Não há agentes ainda.</span>
                    </div>
                  )}
                </SelectContent>
              </Select>
            </div>
          </Fieldset>
        </FieldsetWrapper>

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
  )
}
