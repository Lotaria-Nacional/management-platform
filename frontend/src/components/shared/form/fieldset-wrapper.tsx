import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function FieldsetWrapper({ children }: Props) {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
}
