import { cn } from "@/lib/utils";
import { SyncLoader } from "react-spinners";

type Props = {
  className?: string;
  color?: string;
  showText?: boolean;
};

export default function Loading({
  className,
  showText = false,
  color = "#FFFF",
}: Props) {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center w-full h-full">
      <SyncLoader size={8} color={color} className={cn("", className)} />
      {showText && <span>Carregando...</span>}
    </div>
  );
}
