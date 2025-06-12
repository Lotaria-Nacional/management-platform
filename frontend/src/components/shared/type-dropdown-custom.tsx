import Loading from "./loading";
import { TypeEntity } from "@/app/types";
import EmptyDataState from "./empty-data-state";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";

interface Props {
  types: { isLoading: boolean; data?: TypeEntity[] };
  typeId: string | undefined;
  subtypeId: string | undefined;
  onTypeChange: (value: string) => void;
  onSubtypeChange: (value: string | undefined) => void;
}

export default function TypeDropdownCustom({
  types,
  onSubtypeChange,
  onTypeChange,
  subtypeId,
  typeId,
}: Props) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = useMemo(() => {
    if (!types.data) return "Selecionar tipo";
    for (const type of types.data) {
      if (type.id === typeId && !subtypeId) return type.name;
      const sub = type.subtype?.find((s) => s.id === subtypeId);
      if (sub) return sub.name;
    }
    return "Selecionar tipo";
  }, [typeId, subtypeId, types.data]);

  function handleTypeSelect(type: TypeEntity) {
    onTypeChange(type.id);
    onSubtypeChange(undefined); // limpa o subtype se selecionar tipo sem subtype
    setOpen(false);
    setOpenSub(null);
  }

  function handleSubtypeSelect(sub: { id: string }, parentTypeId: string) {
    onTypeChange(parentTypeId);
    onSubtypeChange(sub.id);
    setOpen(false);
    setOpenSub(null);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setOpenSub(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full" ref={containerRef}>
      <button
        type="button"
        className="border rounded-button px-3 w-full h-input flex justify-between items-center text-zinc-500"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-[14px]">{selectedLabel}</span>
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-20">
          {types.isLoading ? (
            <div className="p-4 text-center">
              <Loading />
            </div>
          ) : !types.data?.length ? (
            <EmptyDataState />
          ) : (
            types.data.map((type) => {
              const hasSub = type.subtype?.length > 0;
              return (
                <div
                  key={type.id}
                  className="relative group"
                  onMouseEnter={() => setOpenSub(type.id)}
                  // Remova onMouseLeave aqui
                >
                  <div
                    className="flex w-full justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      if (!hasSub) handleTypeSelect(type);
                    }}
                  >
                    <span className="text-sm">{type.name}</span>
                    {hasSub && <ChevronRight size={16} />}
                  </div>

                  {hasSub && openSub === type.id && (
                    <div
                      className="absolute top-0 left-full ml-[2px] w-48 bg-white border border-gray-200 rounded shadow-lg"
                      onMouseLeave={() => setOpenSub(null)} // mover para cá
                      onClick={(e) => e.stopPropagation()} // evita que clique feche o menu antes do onClick funcionar
                    >
                      {type.subtype.map((sub) => (
                        <div
                          key={sub.id}
                          className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                          onClick={() => handleSubtypeSelect(sub, type.id)}
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
