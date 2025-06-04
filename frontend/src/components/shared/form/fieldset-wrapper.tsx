import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export default function FieldsetWrapper({ children, className }: Props) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-between gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
