import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

type Props = { className?: string } & PropsWithChildren;

export default function PageHeaderTitle({ children, className }: Props) {
  return (
    <h2 className={twMerge("text-h1-lg font-medium", className)}>{children}</h2>
  );
}
