import { FaBell } from "react-icons/fa"
import whiteLogoImg from "@/assets/icons/white-logotipo.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header() {
  return (
    <header className="bg-RED-700 lg:bg-white lg:pl-sidebar-safe-area h-header border-b flex items-center justify-between p-container">
      <div className="hidden lg:flex" />

      <picture>
        <source
          media="(max-width:1024px)"
          srcSet={whiteLogoImg}
          className="w-[100px] h-[45px] object-contain"
        />
      </picture>

      <div className="flex items-center gap-2">
        <FaBell size={18} className="text-YELLOW" />
        <Avatar>
          <AvatarFallback>PL</AvatarFallback>
          <AvatarImage></AvatarImage>
        </Avatar>
      </div>
    </header>
  )
}

export default Header
