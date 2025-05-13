import { cn } from "@/lib/utils";
import { SyncLoader } from "react-spinners";

type Props = {
  className?: string;
  color?: string;
};

export default function Loading({ className, color = "#FFFF" }: Props) {
  return <SyncLoader size={8} color={color} className={cn("", className)} />;
}
