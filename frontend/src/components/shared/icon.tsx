import { ICONS } from "@/assets";
import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IconSize = "small" | "medium" | "large";

type Props = {
  name: keyof typeof ICONS;
  size?: IconSize;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Icon({ name, className, ...props }: Props) {
  const iconSVG = ICONS[name];
  return (
    <img {...props} src={iconSVG} className={twMerge("size-4", className)} />
  );
}
