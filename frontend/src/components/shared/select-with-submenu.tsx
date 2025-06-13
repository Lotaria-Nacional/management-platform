import { useState } from "react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select"
import Loading from "@/components/shared/loading"
import EmptyDataState from "@/components/shared/empty-data-state"
import { ChevronRight } from "lucide-react" // ou outro ícone
import { TypeEntity, SubtypeEntity } from "@/app/types"

type Props = {
  types: { data?: TypeEntity[]; isLoading: boolean }
  onSelectType: (typeId: string, subtypeId?: string) => void
}

export function SelectWithSubmenu({ types, onSelectType }: Props) {
  const [openSubmenuFor, setOpenSubmenuFor] = useState<string | null>(null)

  return (
    <Select>
      <SelectTrigger className="!h-input w-full">
        <SelectValue placeholder="Escolher tipo" />
      </SelectTrigger>
      <SelectContent className="relative overflow-visible">
        {types.isLoading ? (
          <Loading />
        ) : !types.data?.length ? (
          <EmptyDataState />
        ) : (
          types.data.map((type) => {
            const hasSubs =
              Array.isArray(type.subtypes) && type.subtypes.length > 0

            return (
              <div
                key={type.id}
                className="relative group" // container relativo
                onMouseEnter={() =>
                  hasSubs && setOpenSubmenuFor(type.id.toString())
                }
                onMouseLeave={() => hasSubs && setOpenSubmenuFor(null)}
              >
                {/* item principal */}
                <div
                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => !hasSubs && onSelectType(type.id.toString())}
                >
                  <span>{type.name}</span>
                  {hasSubs && (
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  )}
                </div>

                {/* submenu */}
                {hasSubs && openSubmenuFor === type.id.toString() && (
                  <div className="absolute top-0 left-full ml-1 w-48 bg-white border rounded shadow-lg z-10">
                    {type?.subtypes.map((st: SubtypeEntity) => (
                      <div
                        key={st.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          onSelectType(type.id.toString(), st.id.toString())
                        }
                      >
                        {st.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })
        )}
      </SelectContent>
    </Select>
  )
}
