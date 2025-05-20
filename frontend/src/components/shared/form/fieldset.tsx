import { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

export default function Fieldset({ children }: Props) {
  return (
    <fieldset className="flex flex-col text-small leading-small md:text-body md:leading-body gap-[6px] md:gap-2">
      {children}
    </fieldset>
  );
}
