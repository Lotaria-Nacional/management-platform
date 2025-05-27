import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TypeEntity } from "@/app/types";
import Loading from "./loading";
import EmptyDataState from "./empty-data-state";

interface Props {
  types: { isLoading: boolean; data?: TypeEntity[] };
  onSelectType: (typeId: string) => void;
  onSelectSubtype: (subId: string, typeId: string) => void;
}

export default function TypeDropdownCustom({
  types,
  onSelectType,
  onSelectSubtype,
}: Props) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("Selecionar tipo");
  const containerRef = useRef<HTMLDivElement>(null);

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

  function handleTypeSelect(type: TypeEntity) {
    onSelectType(type.id);
    setSelectedLabel(type.name);
    setOpen(false);
    setOpenSub(null);
  }

  function handleSubtypeSelect(
    type: TypeEntity,
    sub: { id: string; name: string }
  ) {
    // Notifica também o tipo pai e subtipo
    onSelectType(type.id);
    onSelectSubtype(sub.id, type.id);
    setSelectedLabel(sub.name);
    setOpen(false);
    setOpenSub(null);
  }

  return (
    <div className="relative inline-block w-full" ref={containerRef}>
      <button
        type="button"
        className="border rounded-button px-3 w-full h-input flex justify-between items-center text-zinc-500"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{selectedLabel}</span>
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
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <div
                    className="flex w-full justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      if (!hasSub) handleTypeSelect(type);
                    }}
                  >
                    <span>{type.name}</span>
                    {hasSub && <ChevronRight size={16} />}
                  </div>

                  {hasSub && openSub === type.id && (
                    <div className="absolute top-0 left-full ml-[2px] w-48 bg-white border border-gray-200 rounded shadow-lg">
                      {type.subtype.map((sub) => (
                        <div
                          key={sub.id}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSubtypeSelect(type, sub)}
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
