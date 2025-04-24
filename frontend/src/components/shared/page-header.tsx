import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = { className?: string } & ComponentProps<"div">;

function PageHeader({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={twMerge("w-full flex items-center justify-between", className)}
    >
      {children}
    </div>
  );
}

export default PageHeader;
