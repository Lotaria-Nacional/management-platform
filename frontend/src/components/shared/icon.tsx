import { ASSETS } from "@/assets/icons"

type IconSize = "small" | "medium" | "large"

type Props = {
  name: keyof typeof ASSETS
  size?: IconSize
}

export default function Icon({ name }: Props) {
  const iconSVG = ASSETS[name]
  return <img src={iconSVG} className="size-6" />
}
