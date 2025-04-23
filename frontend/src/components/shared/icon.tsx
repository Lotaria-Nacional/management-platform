import { ASSETS } from "@/assets/icons";
import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IconSize = "small" | "medium" | "large";

type Props = {
  name: keyof typeof ASSETS;
  size?: IconSize;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Icon({ name, className, ...props }: Props) {
  const iconSVG = ASSETS[name];
  return (
    <img {...props} src={iconSVG} className={twMerge("size-6", className)} />
  );
}
