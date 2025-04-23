import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef, PropsWithChildren } from "react";

type ButtonVariant = "red" | "white" | "ghost" | "link";
type VariantStyle = Record<ButtonVariant, string>;

type Props = {
  variant?: ButtonVariant;
  className?: string;
} & ComponentProps<"button"> &
  PropsWithChildren;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = "red", ...props }, ref) => {
    const variantStyle: VariantStyle = {
      red: "bg-RED-200 !text-white hover:bg-RED-200/90",
      white: "bg-white text-black hover:bg-white/70",
      ghost: "bg-transparent text-black hover:bg-GRAY-200",
      link: "bg-transparent hover:text-underline",
    } as const;

    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          `${variantStyle[variant]} flex items-center text-button font-medium gap-button p-button min-w-button h-button rounded-button cursor-pointer duration-200 ease-in-out transition-all`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
