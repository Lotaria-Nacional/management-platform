import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export default function PageHeaderActions({ children, className }: Props) {
  return (
    <div className={twMerge("flex items-center gap-2 md:gap-4", className)}>
      {children}
    </div>
  );
}
