import Icon from "./icon";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

type Props = {
  className?: string;
};

export default function InputSearch({ className }: Props) {
  return (
    <div
      className={cn(
        "w-[140px] md:w-[278px] h-button px-3 flex items-center border border-zinc-300 rounded-[4px] bg-white",
        className
      )}
    >
      <Input
        placeholder="Pesquisar..."
        className="w-full shadow-none !h-full bg-white border-none"
      />
      <Icon name="search" className="text-zinc-300 cursor-pointer" />
    </div>
  );
}
